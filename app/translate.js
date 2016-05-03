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
        'GLOBAL_SEARCH_PLACEHOLDER':'global search',
        'CANCEL':'cancel',
        'OK':'OK',
        'HELP':'help',
        'SUPPORT':'support',
        'CHANGE_PASS':'change password',
        'ABOUT':'About',
        'RONASH':'Ronash',
        'TEST':'test',
        'NOTIF_TITLE':'title',
        'TEXT':'text',
        'SENDTIME':'send time',
        'STATUS':'status',
        'CLICK_DISMISS':'click dismiss',
        'CONTACT_RECEIVE':'contact receive',
        'ADD_NOTIFICATION':' اعلان جدید',
        'NOTIF_FIRST_STEP':'define small notification',
        'NEW_NOTIF_TITLE':'make new notification',
        'TITLE_BAR_TEXT':'notification title bar text',
        'ICON_DESC':'change notification icon',
        'SELECT_APP':'select Application',
        'UPLOAD_IMAGE':'Drop images here or click to upload',
        'SELECT_IMAGE':'select image',
        'NO_ACTION':'No Action',
        'OPEN_APPLICATION':'Open Application',
        'OPEN_LINK':'Open URL',
        'CURRENT_PASSWORD':'current password',
        'NEW':'new',
        'PASS_NOT_MATCH':'your password do not match , try again',
        'PASS_CHANGED':'your password changed successfully',
        'CHANGE_PASSWORD_MSG':'change your password',
        'NOTIF_EXTITLE':'complete Title',
        'NOTIF_EXTEXT':'complete Text',
        'NOTIF_BRIEF':'notication brief',
        'NOTIF_IMAGE':'notification image',
        'ICON':'icon',
        'NOTIF_SECOND_STEP':'complete notification',
        'NOTIF_THIRD_STEP':'notification buttons',
        'NOTIF_FORTH_STEP':'JSON',
        'NOTIF_FIFTH_STEP':'notification setting',

        'IS_HIDDEN':'is hidden',
        'SCREEN_TURN_ON':'screen turn off?',
        'VIBRATE':'vibrate?',
        'ON_TIME':'on time',
        'OFF_TIME':'off time',
        'COLOR':'color',
        'LED':'LED',
        'IMEI':'IMEI',
        'NOTIF_SIXTH_STEP':'test send',
        'ADD_NOTIF_BUTTON':'add notification button',
        'WIZARD_PREV':'previous',
        'WIZARD_NEXT':'next',
        'WIZARD_FIN':'send',
        'TIME_SECOND':'second',
        'URL':'url',
        'URI':'uri command',
        'NOTIF_VOICE':'notification voice',
        'SELECT_VOICE':'select voice',
        'REQUIRE_APP_ERROR':'please choose your app first',
        'REQUIRE_TEXT_TITLE':'please first fill the text and title'
    });

    $translateProvider.translations('fa', {
        'SIGNIN_MSG': 'ورود به بخش مدیریت',
        'EMAIL': 'ایمیل',
        'PASSWORD': 'رمز عبور',
        'REPASSWORD': 'تکرار رمز عبور',
        'REMEMBER_ME':'مرا بخاطر بسپار؟',
        'AS_DEMO':'ورود به دمو',
        'SIGNIN':'ورود',
        'FORGOT':'رمز عبور را فراموش کرده اید؟',
        'SIGNUP':'ثبت نام',
        'HAVENT_ACCOUNT':'ثبت نام نکرده اید؟ ',
        'HAVE_ACCOUNT':'قبلا ثبت نام کرده اید؟ ',
        'FORGOT_PASSWORD':'رمز عبورتان را فراموش کرده اید؟',
        'FORGOT_MSG':'ایمیل خود را وارد نمایید تا نحوه احیا نمودن رمز عبور را برای شما ارسال کنیم.',
        'SIGNUP_MSG':'ثبت نام',
        'AGREE':' را قبول دارم',
        'TERMS':'شرایط استفاده',
        'PROFILE':'حساب کاربری',
        'SIGNOUT':'خروج',
        'HOME':'خانه',
        'APPLICATIONS':'اپلیکیشن ها',
        'INSTALLED':'نصب ها',
        'NOTIFICATIONS':'اعلان ها',
        'SECTIONNAME':'مدیریت نوتیفیکیشن',
        'DEVICE':'دستگاه',
        'APPLICATION':'اپلیکیشن',
        'INSTALLTIME':'تاریخ نصب',
        'LASTSEEN':'آخرین بازدید',
        'INSTALL_TIME_PLACE_HOLDER':'۱۳۹۴.۱۱.۲۳',
        'LASTSEEN_PLACE_HOLDER':'۱۳۹۴.۱۲.۳',
        'ADD_NEW_APP':'افزودن اپلیکیشن',
        'NAME':'نام',
        'PACKNAME':'نام بسته اپلیکیشن',
        'GLOBAL_SEARCH_PLACEHOLDER':'جستجو.',
        'CANCEL':'انصراف',
        'OK':'تایید',
        'HELP':'راهنما',
        'SUPPORT':'پشتیبانی',
        'CHANGE_PASS':'تغییر رمز عبور',
        'ABOUT':'درباره',
        'RONASH':' روناش ',
        'TEST':' آزمایش ',
        'NOTIF_TITLE':'تیتر',
        'TEXT':'متن',
        'SENDTIME':'زمان ارسال',
        'STATUS':'وضعیت',
        'CLICK_DISMISS':'نسبت کلیک',
        'CONTACT_RECEIVE':'میزان دریافت',
        'ADD_NOTIFICATION':' اعلان جدید',

        'NEW_NOTIF_TITLE':'ایجاد نوتیفیکیشن جدید',
        'TITLE_BAR_TEXT':'متن نوار اعلان',
        //'ICON_DESC':'در صورتیکه می خواهید آیکون دیگری در اعلان نمایش داده شود، آن را انتخاب کنید.',
        'ICON_DESC':'برای تغییر آیکون در اعلان میبایست عکس را به اینجا بکشید یا اینجا را کلیک کنید',
        'SELECT_APP':'انتخاب اپلیکیشن',
        'UPLOAD_IMAGE':'عکس را به اینجا بکشید یا اینجا را کلیک کنید',
        'SELECT_IMAGE':'انتخاب عکس',
        'ACTION_PLACEHOLDER':'عملکرد کلیک',
        'NO_ACTION':'بدون عملکرد',
        'OPEN_APPLICATION':'باز کردن اپلیکیشن',
        'OPEN_LINK':'باز کردن URL',
        'CURRENT_PASSWORD':'رمز عبور فعلی',
        'NEW':'جدید',
        'PASS_NOT_MATCH':'رمز عبور با تکرار آن مطابق نیست.',
        'PASS_CHANGED':'رمز عبور با موفقیت تغییر کرد',
        'CHANGE_PASSWORD_MSG':'تغییر رمز عبور',
        'NOTIF_EXTITLE':'تیتر کامل',
        'NOTIF_EXTEXT':'متن کامل',
        'NOTIF_BRIEF':'خلاصه',
        'NOTIF_IMAGE':'تصویر اعلان',
        'ICON':'آیکون',
        'NOTIF_FIRST_STEP':'انتخاب اپ',
        'NOTIF_SECOND_STEP':'اعلان کوچک',
        'NOTIF_THIRD_STEP':'اعلان کامل',
        'NOTIF_FORTH_STEP':'دکمه های اعلان',
        'NOTIF_FIFTH_STEP':'JSON',
        'NOTIF_SIXTH_STEP':'نحوه نمایش اعلان',
        'NOTIF_SEVENTH_STEP':'فیلتر مخاطبین',
        'IS_HIDDEN':'هدف تنها ارسال اطلاعات به اپلیکیشن است و به کاربر چیزی نمایش داده نشود؟',
        'SCREEN_TURN_ON':'روشن شدن صفحه نمایش',
        'VIBRATE':'ویبره',
        'ON_TIME':'زمان روشن',
        'OFF_TIME':'زمان خاموش',
        'COLOR':'رنگ',
        'LED':'LED',
        'IMEI':'IMEI',
        'ADD_NOTIF_BUTTON':'افزودن دکمه',
        'WIZARD_PREV':'قبل',
        'WIZARD_NEXT':'بعدی',
        'WIZARD_FIN':'ارسال',
        'TIME_SECOND':'ثانیه',
        'URL':'url',
        'URI':'uri command',
        'NOTIF_VOICE':'صدای اعلان',
        'SELECT_VOICE':'انتخاب صدا',
        'REQUIRE_APP_ERROR':'ابتدااپلیکیشن های مورد نظر را انتخاب کنید',
        'REQUIRE_TEXT_TITLE':'لطفا فیلد های تیتر و متن را کامل کنید.',
        "NOTHING_HAPPEN_NAME":'هیچ',
        "OPEN_APP_NAME":'باز کردن نرم افزار',
        "OPEN_URL_NAME":'بازکردن لینک',
        "OPEN_URI_NAME":'انجام اتفاق',
        "OPEN_DIALOG_NAME":'بازکردن پنجره',
        'NOTHING_HAPPEN_DESC':'توضیحات',
        'OPEN_APP_DESC':'توضیحات',
        'FORGOT_ALARM':'we sent you an email please check it out',
        'SEND':'ارسال',
        'RETURN_TO':'بازگشت به ',
        'CHECK_AGREEMENT':'please check you agree the terms',
        'REGISTER_RESPONSE_MSG':'برای شما یک ایمیل حاوی لینک فعال سازی ارسال شده است.',
        'LOGO_PATH':'assets/images/logo.png',
        'URI_INCORRECT':'uri is not correct',
        'REQUIRED':'this field has to fill',
        'PROVIDER':'پروایدر',
        'IMAGE_IS_UPLOADED':'عکس آپلود شده است.',
        'UPLOAD':'آپلود',
        'FORGOT_DONE':'رمز عبور با موفقیت تغییر یافت.',
        'APP_NAME':'pushe.co',
        'RELEASE_NAME':'- test release',
        'DASHBOARD':'داشبورد',
        'APPLICATIONS_LIST':'لیست اپلیکیشن',
        'CREATE_APPLICATION':'ایجاد اپلیکیشن',
        'NOTIF_SENT':'ارسال شده',
        'NOTIF_ALL':'همه',
        'NOTIF_REMOVED':'پاک شده ها',
        'NOTIF_DRAFT':'پیش نویس ها',
        'NOTIF_PROGRAMMED':'برنامه ریزی شده',
        'NOTIF_SENDING':'در حال ارسال',
        'NOT_VALID_EMAIL':'فرمت ایمیل صحیح نیست.',
        'MINIMUM_PASS_LEN':'طول رمز عبور باید حداقل سه کاراکتر باشد.',
        'WEAK_STRENGTH':'امنیت رمز ضعیف است.',
        'MEDIUM_STRENGTH':'امنیت رمز متوسط میباشد.',
        'STRONG_STRENGTH':'رمز امنیت خوبی دارد.',
        'SEND_FORGOT_LINK':'ارسال لینک',
        'BLOG_PAGE':'بلاگ',
        'STATUS_PAGE':'وضعیت',
        'ITS_REQUIRED':'این فیلد نیاز است که حتما پر شود.',
        'PASS_IS_WEAK':'امنیت رمز عبور ضعیف است با استفاده از عدد و حروف بزرگ و کوچک و کاراکتر ها همراه باهم امنیت اکانت خود را تقویت نمایید.',
        'CAPS_LOCK_ON':'کپس لاک روشن میباشد.',
        'USER_INFO':'اطلاعات کاربری',
        'PERSONAL_INFO':'اطلاعات شخصی',
        'NO_PERSONAL_DATA':'هنوز اطلاعاتی ثبت نکرده اید.',
        'COPYRIGHT':'تمامی حقوق برای سایت پوشه محفوظ است.',

        'FAMILY':'نام خانوادگی',
        'NATIONALCODE':'کد ملی',
        'PERSONALPHONE':'تلفن همراه',
        'HOMEPHONE':'تلفن به همراه کد شهر',
        'PERSONAL':'حقیقی',
        'BUSINESS':'حقوقی',
        'ADDRESS':'آدرس',
        'ADD_JSON_NOTIFICATION':'اعلان جدید جیسون',
        'NOTIF_IMG_DESC':'برای ایجاد عکس در اعلان میبایست عکس را به اینجا بکشید یا اینجا را کلیک کنید',
        'NOTIF_JSON_FIRST_STEP':'جیسان گیری',
        'CHANGE_EMAIL_ADDRESS':'تغییر آدرس ایمیل',
        'CHANGE_PASSWORD':'تغییر رمز عبور',
        'PHONE':'تلفن همراه',
        'TYPE':'نوع',
        'WOMEN':'زن',
        'MEN':'مرد',
        'SEX':'جنسیت',
        'CHANGE_EMAIL_BUTTON':'درخواست تغییر ایمیل',
        'CHANGE_INFO':'تغییر اطلاعات',
        'NEW_PASSWORD':'رمز عبور جدید',
        'NEW_REPASSWORD':'تکرار رمز عبور جدید',
        'SUCCESS_CHANGE_PASS':'رمز عبور شما با موفقیت تغییر یافت',
        'FAQ':'سوالات متداول',
        'NEW_APP_TITLE':'ایجاد اپلیکیشن جدید',
        'ACTIVE_INSTALLATION':'تعداد کل نصب های فعال کاربر',
        'USER_APP_COUNT':'تعداد اپ های کاربر',
        'SEND_NOTIF_COUNT':'تعداد کل اعلانهایی که تاکنون با پوشه ارسال کرده',
        'CREATION_TIME':'زمان ایجاد',
        'ACTIVE_USER_COUNT':'تعداد کاربران فعال در پوشه',
        'DOWNLOAD_MANIFEST':'دانلود مانیفست',
        'REMOVE':'حذف',
        'DASHBOARD_GALLERY':'گالری داشبورد',
        'SLIDE':'صفحه',
        'PRIVACY' : 'حریم خصوصی',
        'AND' : 'و',
        'PHONE_NUMBER':'021-44668276'
    });

    $translateProvider.preferredLanguage('fa');

    $translateProvider.useSanitizeValueStrategy(null);//it do nothing with translate
    //we dont need to sanitize translations also we need to dont sanitize them because we may use below line in translations
        //e.g: '<strong>click kon</strong>'
}]);