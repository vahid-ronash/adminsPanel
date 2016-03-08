.. image:: https://travis-ci.org/fingerpich/adminsPanel.svg?branch=master    :target: https://travis-ci.org/fingerpich/adminsPanel

.. image:: https://api.codacy.com/project/badge/grade/deaefda4e2444bda8fb99bb55e04a101    :target: https://www.codacy.com/app/zarei-bs/adminsPanel

AdminsPanel
============
 this panel manage notifications for admins mobile app

Requirements
------------
 You'll need to have the following items installed before continuing.
  - `Node.js <http://nodejs.org>`_: Use the installer provided on the NodeJS website.
  - `Bower <http://bower.io>`_: Run **[sudo] npm install -g bower**
  
Run Project
-----------
 after you install above requirements you have to run below commands
  - Run **bower install** to install front-end packages
  - open **index.html** in a browser
  
Setup Testing
-------------
 for running test in local we have to do these
  - Run **npm install** to install node modules
  - `Gulp <http://gulpjs.com>`_: Run **[sudo] npm install -g gulp**
  - `karma <https://karma-runner.github.io>`_ : Run **[sudo] npm install -g karma**
  - Run **gulp test** to execute tests
  - Run **gulp autotest** to execute tests in developing

TODO
----
 - Setup translation tool
 - run e2e test by protractor
 - copy and customize template files into it