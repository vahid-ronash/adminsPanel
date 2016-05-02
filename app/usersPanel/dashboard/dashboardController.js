/**
 * Created by mojtaba on 3/9/16.
 */
/*global angular */
((function() {
    'use strict';
    /**
     * @ngdoc controller
     * @name app.controller.dashboardController
     * @description
     * control dashboard page
     */
    angular
        .module('app')
        .controller('dashboardController', ['$scope',function($scope){
            var thisController=this;
            thisController.app=$scope.app;//point to parent scope.app
            thisController.data={
                activeInstallationCount:32062,
                applicationCount:5,
                notificationSent:3512,
            };
            thisController.slide={
                noWrapSlides:false,
                interval:5000
            };
            thisController.slides=[
                {image:"assets/images/dashboard/Pushe.co-1.jpg",text:"تاثیر فرستادن اعلان در درصد افرادی که استفاده مداوم از نرم افزار دارند"},
                {image:"assets/images/dashboard/Pushe.co-2.jpg",text:"افزایش استفاده کاربر از نرم افزار"},
                {image:"assets/images/dashboard/Pushe.co-3.jpg",text:"تاثیر تعداد کلمات اعلان بر روی میزان کلیک شدن روی آن"},
                {image:"assets/images/dashboard/Pushe.co-4.jpg",text:"تاثیر فعال بودن دریافت اعلان"},
                {image:"assets/images/dashboard/Pushe.co-5.jpg",text:"تاثیر نوع جمله در میزان کلیک روی اعلان ها"},
                {image:"assets/images/dashboard/Pushe.co-6.jpg",text:"درصد کلیک روی اعلان ها در ساعات مختلف روز"},
                {image:"assets/images/dashboard/Pushe.co-7.jpg",text:"مشغول بودن به نرم افزار در تمام ساعات روز"},
                {image:"assets/images/dashboard/Pushe.co-8.jpg",text:"مزایای باز شدن اعلان های هدفمند در مقایسه با اعلان با مخاطب عام"}
            ]
        }]);
})());