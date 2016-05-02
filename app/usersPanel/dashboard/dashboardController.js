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
        .controller('dashboardController', ['$scope','$http','URLS',function($scope,$http,URLS){
            var thisController=this;
            thisController.app=$scope.app;//point to parent scope.app
            $http.get(URLS.URL_GET_DASHBOARD_DATA).then(function (result) {
                thisController.data = result.data;
            });
            thisController.slideData={
                cycleSlides:true,
                interval:5000,
                active:0,
                list:[
                    {id:1,image:"/assets/images/dashboard/Pushe.co-1.png",text:"تاثیر فرستادن اعلان در درصد افرادی که استفاده مداوم از نرم افزار دارند",active:true},
                    {id:2,image:"/assets/images/dashboard/Pushe.co-2.png",text:"افزایش استفاده کاربر از نرم افزار"},
                    {id:3,image:"/assets/images/dashboard/Pushe.co-3.png",text:"تاثیر تعداد کلمات اعلان بر روی میزان کلیک شدن روی آن"},
                    {id:4,image:"/assets/images/dashboard/Pushe.co-4.png",text:"تاثیر فعال بودن دریافت اعلان"},
                    {id:5,image:"/assets/images/dashboard/Pushe.co-5.png",text:"تاثیر نوع جمله در میزان کلیک روی اعلان ها"},
                    {id:6,image:"/assets/images/dashboard/Pushe.co-6.png",text:"درصد کلیک روی اعلان ها در ساعات مختلف روز"},
                    {id:7,image:"/assets/images/dashboard/Pushe.co-7.png",text:"مشغول بودن به نرم افزار در تمام ساعات روز"},
                    {id:8,image:"/assets/images/dashboard/Pushe.co-8.png",text:"مزایای باز شدن اعلان های هدفمند در مقایسه با اعلان با مخاطب عام"}
                ]
            };
        }]);
})());