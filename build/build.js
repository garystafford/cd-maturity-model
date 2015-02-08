/**
 * Created by gstafford on 2/6/15.
 *
 * http://requirejs.org/docs/optimization.html
 * npm install -g requirejs
 * cd ~/WebstormProjects/cd-maturity-model
 * node build/r.js -o build/build.js
 * node build/r.js -o cssIn=css/radar.css out=dist/main-built.css
 */

({
    baseUrl               : '../js/radar',
    name                  : './main',
    out                   : '../dist/main-built.js',
    enforceDefine         : true,
    findNestedDependencies: true
})

//exclude: ['./../d3/d3'],
//name   : './setup',

