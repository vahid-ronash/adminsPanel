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
            var marketOption = {
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

            installationOption.xAxis[0].data = ['95/02/01','95/02/02','95/02/03','95/02/04','95/02/05','95/02/06'];
            installationOption.series[0].data = [10, 12, 21, 54, 260, 830];
            installationOption.series[1].data = [30, 182, 434, 791, 390, 30];
            installationOption.series[2].data = [1320, 1132, 601, 234, 120, 90];

            marketOption.series[0].data = [
                                        {value:335, name: '4.4.2'},
                                        {value:310, name: '5.0.1'},
                                        {value:234, name: '4.0.3'},
                                        {value:135, name: '6.0.1'}
                                        ];
            marketOption.legend.data=marketOption.series[0].data.map(function(d){return d.name});

            osVersionOption.series[0].data = [
                                        {value:335, name:'CafeBazaar'},
                                        {value:310, name:'Myket'},
                                        {value:234, name:'Iran Apps'},
                                        {value:135, name:'Candoo'}
                                        ];
            osVersionOption.legend.data=osVersionOption.series[0].data.map(function(d){return d.name});

            appVersionOption.series[0].data = [
                                        {value:33, name:'10.1'},
                                        {value:3, name:'3.5'},
                                        {value:24, name:'4'},
                                        {value:1, name:'1.0.4'}
                                        ];
            appVersionOption.legend.data=appVersionOption.series[0].data.map(function(d){return d.name});


            installationChart.setOption(installationOption);
            marketChart.setOption(marketOption);
            osVersionChart.setOption(osVersionOption);
            appVersionChart.setOption(appVersionOption);

        }]);
})());