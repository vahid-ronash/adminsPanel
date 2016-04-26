/**
 * Created by mojtaba on 4/25/16.
 */
Raven //it added to req.js in gulp file
    .config('http://65e34cc4421f4c0e9250298ad95d4617@logs.ronash.co/14')
    .addPlugin(Raven.Plugins.Angular)
    .install();