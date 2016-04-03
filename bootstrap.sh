#!/usr/bin/env bash

usage() {
	echo ""
	echo "Usage: "`basename $0`" [--proxy-path] [--no-bin-links]" >&2
	echo "--proxy-path: NGINX api proxy path (i.e. http://127.0.0.1:8080/)"
	echo "--no-bin-links: Do not use npm symlinks since virtual box on windows does not support it"
}

while [ $# -gt 0 ]; do
    case $1 in
        --no-bin-links)
            disable_symlinks="yes"
            shift;
            ;;
        --proxy-path)
            proxy_pass=$2
			shift;
			shift;
			;;
		-h|--help)
			usage;
			exit 0;
			;;
		*)
			echo "Usage: $0 [--proxy-path]"
			exit 1;
			;;
    esac
done

if [ x$proxy_pass = x"" ]; then
    echo "Please provide proxy path with --proxy-path option"
    usage
    exit 1;
fi


echo "Provisioning virtual machine..."

echo "Installing required packages..."
sudo apt-get -y -q update
sudo apt-get -y -q upgrade

echo "Installing common dependencies such as Git.."
sudo apt-get install -y build-essential ntp git

echo "Installing Nginx..."
sudo apt-get install -y nginx

echo "Configuring Nginx..."
echo "Using $proxy_pass as proxy path..."

if [ ! -f /etc/nginx/sites-available/nginx_vhost ]; then
    sudo touch /etc/nginx/sites-available/nginx_vhost
fi

sudo bash -c "cat /var/www/pushe/provision/config/nginx_vhost | sed -e 's,@@PROXY_PATH@@,$proxy_pass,g' > /etc/nginx/sites-available/nginx_vhost"

if [ ! -L '/etc/nginx/sites-enabled/nginx_vhost' ]; then
    sudo ln -s /etc/nginx/sites-available/nginx_vhost /etc/nginx/sites-enabled/
fi

if [ -f /etc/nginx/sites-available/default ]; then
    sudo rm -rf /etc/nginx/sites-available/default
fi

sudo service nginx restart


echo "Installing NodeJS & NPM for Ubuntu 14.04 LTS..."
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs

echo "Installing bower & gulp globally..."
sudo npm install -g bower gulp

echo "Installing npm packages..."
cd /var/www/pushe

# FIXME Issue PUSH-396 - Find a suitable workaround that works for windows and makes npm usable
if [ x${disable_symlinks} = x"yes" ]; then
    npm install --no-bin-links
else
    npm install
fi

echo "Install bower packages without asking about version conflict and install last version..."
cd /var/www/pushe
bower install --no-interactive
