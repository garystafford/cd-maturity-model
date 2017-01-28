/**
 * Created by gstafford on 2/6/15.
 *
 * http://requirejs.org/docs/optimization.html
 * npm install -g requirejs
 * cd ~/WebstormProjects/cd-maturity-model
 * node build/r.js -o build/build.js
 * node build/r.js -o cssIn=css/radar.css out=dist/main-built.css
 */

/*properties
 app, baseUrl, d3, dataRadar, enforceDefine, findNestedDependencies, name,
 out, paths
 */

({
    baseUrl               : "./../js/radar",
    "paths"               : {
        "app"    : "./../../app",
        d3       : "./../d3/d3.min",
        // dataRadar: "./../data/iac_radar"
        dataRadar: "./../data/data_radar"
    },
    name                  : "app",
    out                   : "./../dist/main-built.js",
    enforceDefine         : true,
    findNestedDependencies: true
})
