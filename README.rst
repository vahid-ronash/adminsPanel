.. image:: https://travis-ci.org/fingerpich/adminsPanel.svg?branch=master    :target: https://travis-ci.org/fingerpich/adminsPanel

.. image:: https://api.codacy.com/project/badge/grade/deaefda4e2444bda8fb99bb55e04a101    :target: https://www.codacy.com/app/zarei-bs/adminsPanel

.. image:: https://api.codacy.com/project/badge/coverage/deaefda4e2444bda8fb99bb55e04a101    :target: https://www.codacy.com/app/zarei-bs/adminsPanel

AdminsPanel
============
This panel manage notifications for admins mobile app

Requirements
------------

You'll need to have the following items installed before continuing.

- `Node.js <http://nodejs.org>`_: Use the installer provided on the NodeJS website.
- `Bower <http://bower.io>`_: Run ``[sudo] npm install -g bower``

Run Project
-----------

After you install above requirements you have to run below commands.

- Run ``bower install`` to install front-end packages
- open ``index.html`` in a browser
 
Setup Testing
-------------

For running test in local we have to do these

::

    npm install                      // to install node modules
    [sudo] npm install -g gulp
    [sudo] npm install -g karma
    gulp test                        // to execute tests
    gulp autotest                    // to execute tests in developing

* `Gulp <http://gulpjs.com>`_
* `karma <https://karma-runner.github.io>`_

TODO
----

- Setup translation tool
- run e2e test by protractor
- copy and customize template files into it