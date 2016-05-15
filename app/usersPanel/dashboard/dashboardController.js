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
        .controller('dashboardController', ['$scope','$http','URLS','$filter',function($scope,$http,URLS,$filter){
            var thisController=this;
            thisController.app=$scope.app;//point to parent scope.app
            $http.get(URLS.URL_GET_DASHBOARD_DATA).then(function (result) {
                thisController.data = result.data;
            });
            var installationChart = echarts.init(document.getElementById('installationChart'));
            var marketChart = echarts.init(document.getElementById('marketChart'));
            var osVersionChart = echarts.init(document.getElementById('osVersionChart'));
            var appVersionChart = echarts.init(document.getElementById('appVersionChart'));

            var installationOption = {
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:[
                        $filter('translate')("ACTIVE_INSTALLATION"),
                        $filter('translate')("INSTALLATION"),
                        $filter('translate')("UNINSTALATION")
                    ]
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : []
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:$filter('translate')("ACTIVE_INSTALLATION"),
                        type:'line',
                        smooth:true,
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data:[]
                    },
                    {
                        name:$filter('translate')("INSTALLATION"),
                        type:'line',
                        smooth:true,
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data: []
                    },
                    {
                        name:$filter('translate')("UNINSTALATION"),
                        type:'line',
                        smooth:true,
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data:[]
                    }
                ]
            };
            var brandOption = {
                legend: {
                    orient : 'vertical',
                    x : 'left',
                    data: []
                },
                calculable : true,
                series : [
                    {
                        name:$filter('translate')("MARKETS"),
                        type:'pie',
                        radius : ['50%', '70%'],
                        itemStyle : {
                            normal : {
                                label : {
                                    show : false
                                },
                                labelLine : {
                                    show : false
                                }
                            },
                            emphasis : {
                                label : {
                                    show : true,
                                    position : 'center',
                                    textStyle : {
                                        fontSize : '30',
                                        fontWeight : 'bold'
                                    }
                                }
                            }
                        },
                        data:[]
                    }
                ]
            };
            var osVersionOption = {
                legend: {
                    orient : 'vertical',
                    x : 'left',
                    data:[]
                },
                calculable : true,
                series : [
                    {
                        name:$filter('translate')("OS_VERSION"),
                        type:'pie',
                        radius : ['50%', '70%'],
                        itemStyle : {
                            normal : {
                                label : {
                                    show : false
                                },
                                labelLine : {
                                    show : false
                                }
                            },
                            emphasis : {
                                label : {
                                    show : true,
                                    position : 'center',
                                    textStyle : {
                                        fontSize : '30',
                                        fontWeight : 'bold'
                                    }
                                }
                            }
                        },
                        data:[]
                    }
                ]
            };
            var appVersionOption = {

                legend: {
                    orient : 'vertical',
                    x : 'left',
                    data:[]
                },
                calculable : true,
                series : [
                    {
                        name:$filter('translate')("APP_VERSION"),
                        type:'pie',
                        radius : ['50%', '70%'],
                        itemStyle : {
                            normal : {
                                label : {
                                    show : false
                                },
                                labelLine : {
                                    show : false
                                }
                            },
                            emphasis : {
                                label : {
                                    show : true,
                                    position : 'center',
                                    textStyle : {
                                        fontSize : '30',
                                        fontWeight : 'bold'
                                    }
                                }
                            }
                        },
                        data:[]
                    }
                ]
            };

            function convert2PieChart(items) {
                var res = [];
                for (var item in items) {
                    if (items.hasOwnProperty(item))
                        res.push({name: item, value: items[item]});
                }
                return res;
            }
            
            var diagData=thisController.data.diagrams[36];

            var brandPieData=convert2PieChart(diagData.smart_device);
            var osPieData=convert2PieChart(diagData.os);
            var appVersionPieData=convert2PieChart(diagData.app_version);

            installationOption.xAxis[0].data = diagData.date;
            installationOption.series[0].data = diagData.installed;
            installationOption.series[1].data = diagData.installed_sum;
            installationOption.series[2].data = diagData.uninstalled;
            installationOption.series[3].data = diagData.uninstalled_sum;

            brandOption.series[0].data = brandPieData;
            brandOption.legend.data=brandOption.series[0].data.map(function(d){return d.name});

            osVersionOption.series[0].data = osPieData;
            osVersionOption.legend.data=osVersionOption.series[0].data.map(function(d){return d.name});

            appVersionOption.series[0].data = appVersionPieData;
            appVersionOption.legend.data=appVersionOption.series[0].data.map(function(d){return d.name});

            installationChart.setOption(installationOption);
            marketChart.setOption(brandOption);
            osVersionChart.setOption(osVersionOption);
            appVersionChart.setOption(appVersionOption);

        }]);
})());