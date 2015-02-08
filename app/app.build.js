/**
 * Created by gstafford on 2/6/15.
 *
 * http://requirejs.org/docs/optimization.html
 * npm install -g requirejs
 * cd ~/WebstormProjects/cd-maturity-model
 * node js/require/r.js -o app/app.build.js
 * node js/require/r.js -o app/app.build.js optimize=none
 *
 * node js/require/r.js -o cssIn=css/radar.css out=appdirectory-build/main-built.css
 *
 */

({
    baseUrl      : '../js/radar',
    name         : './main',
    out          : '../appdirectory-build/main-built.js',
    enforceDefine: true
})

//exclude: ['./../d3/d3'],
//name   : './setup',

