###########
Admin Panel
###########
 .. image:: https://api.codacy.com/project/badge/grade/0f2c136aa81648eebf1ffe2b95ede816
  :target: https://www.codacy.com/app/myOrg/adminsPanel
 .. image:: https://travis-ci.org/fingerpich/adminsPanel.svg?branch=develop
  :target: https://travis-ci.org/fingerpich/adminsPanel
 .. image:: https://api.codacy.com/project/badge/coverage/0f2c136aa81648eebf1ffe2b95ede816
  :target: https://www.codacy.com/app/myOrg/adminsPanel

This panel manage notifications for admins mobile app

Requirements
------------

You'll need to have the following items installed before continuing.

- `Node.js <https://github.com/nodesource/distributions>`_: Use this distribution.
- `Bower <http://bower.io>`_: Run ``[sudo] npm install -g bower``

Quick Start
-----------
- install libvpx1
- install virtualbox
- install vagrant>=1.8.1

in Windows
set environment variables
setx BOX_URL "file://c:/ubuntu-trusty64.box" or any path to ubuntu-trusty64.box with "file://" prefix
setx SHELL_PROVISIONING_ARGS="--proxy-path http://192.168.1.23:8080/ --no-bin-links"

in Linux
export BOX_URL="file:///home/mojtaba/Downloads/softwares/ronash/ubuntu-trusty64.box"
export SHELL_PROVISIONING_ARGS="--proxy-path http://192.168.1.23:8080/ --no-bin-links"

after change proxy pass address we have to run `vagrant provision`

vagrant up --provider virtualbox


Deploy
------

- `curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -`
- `sudo apt-get install -y nodejs`
- `npm install -g bower gulp phantomjs`
- `npm install`
- `bower install --no-interactive --production`
- `gulp buildProduction`

Run Project
-----------

After you install above requirements you have to run below commands.

- Run ``bower install`` to install front-end packages
- Run ``gulp build`` to generate css
- open ``index.html`` in a browser

Setup Testing
-------------

For running test in local we have to do these

::

    npm install                      // to install node modules
    [sudo] npm install -g gulp
    [sudo] npm install -g karma
    [sudo] npm install -g phantomjs
    gulp test                        // to execute tests
    gulp autotest                    // to execute tests in developing

* `Gulp <http://gulpjs.com>`_
* `karma <https://karma-runner.github.io>`_

TODO
----
- run e2e test by protractor
- build All todo in code
