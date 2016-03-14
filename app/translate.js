/**
 * Created by mojtaba on 3/14/16.
 */
/*global angular*/
angular
    .module('app')
    .config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', {
        'SIGNIN_MSG': 'Sign in with your pushe Account',
        'EMAIL': 'Email',
        'PASSWORD': 'Password',
        'REPASSWORD': 'rePassword',
        'REMEMBER_ME':'Keep me signed in',
        'AS_DEMO':'as demo',
        'SIGNIN':'sign in',
        'FORGOT':'Forgot password?',
        'SIGNUP':'sign up',
        'HAVENT_ACCOUNT':'Do not have an account? ',
        'HAVE_ACCOUNT':'Already have an account? ',
        'FORGOT_PASSWORD':'Forgot your password?',
        'FORGOT_MSG':'Enter your email address below and we will send you instructions on how to change your password.',
        'SIGNUP_MSG':'Sign up to your pushe Account',
        'AGREE':'Agree the ',
        'TERMS':'terms and policy',
        'PROFILE':'Profile',
        'SIGNOUT':'Sign out',
        'MANIFEST':'control your application notifications',
        'HOME':'home',
        'APPLICATIONS':'applications',
        'INSTALLED':'installed',
        'NOTIFICATIONS':'notifications',
        'SECTIONNAME':'admins panel',
        'DEVICE':'device',
        'APPLICATION':'application',
        'INSTALLTIME':'install time',
        'LASTSEEN':'last seen',
        'INSTALL_TIME_PLACE_HOLDER':'1/2/12',
        'LASTSEEN_PLACE_HOLDER':'3/5/13',
        'ADD_NEW_APP':'Add new Application',
        'NAME':'name',
        'PACKNAME':'package name',
        'GLOBAL_SEARCH_PLACEHOLDER':'asdvdverfvservesrvserv',
        'CANCEL':'cancel',
        'OK':'OK'
    });

    $translateProvider.translations('fa', {
        'SIGNIN_MSG': 'ورود به بخش مدیریت'
    });

    $translateProvider.preferredLanguage('fa');
}]);