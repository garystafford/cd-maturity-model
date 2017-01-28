# Continuous Delivery Maturity Model - Gap Analysis Visualization Tool

Gap analysis visualization tool for the '[Continuous Delivery Maturity Model](https://secure.surveymonkey.com/_resources/28183/23008183/bf361750-7418-458f-85a6-6c07333e4986.png)'. Based on model from the book, '**Continuous Delivery:** _Reliable Software Releases through Build, Test, and Deployment Automation_', by Jez Humble and David Farley, available on [Amazon](http://www.amazon.com/dp/0321601912). Allows the comparison of the six categories of the CD Maturity Model across multiple applications platforms.

[![CD Gap Analysis](https://github.com/garystafford/cd-maturity-model/blob/requirejs/images/screenshot_thumbnail.png?raw=true)](https://github.com/garystafford/cd-maturity-model/blob/requirejs/images/screenshot.png?raw=true)

## Technology

Browser-based tool, using [d3](http://d3js.org/) JavaScript library. Visualizations rendered using JavaScript and [SVG](http://en.wikipedia.org/wiki/Scalable_Vector_Graphics).

## Data

Currently, data is stored in the `data_radar.js` file as an array of JavaScript object literals. It would be very easy to move the datasource to a static JSON file, or better yet a database, like MongoDB.

```javascript
CATEGORIES = [
    "Build Management and Continuous Integration",
    "Environments and Deployment",
    "Release Management and Compliance",
    "Testing",
    "Data Management",
    "Configuration Management"
];

applications = [
    "Core Banking Application",
    "Internet Banking Application",
    "Human Resources Application",
    "ATM Management Application"
];

maturityData: [
    [{ //Core Banking Application
        "app"  : applications[0],
        "axis" : CATEGORIES[0],
        "value": -1
    }, {
        "app"  : applications[0],
        "axis" : CATEGORIES[1],
        "value": -1
    }, {
        "app"  : applications[0],
        "axis" : CATEGORIES[2],
        "value": 1
    }, {
        "app"  : applications[0],
        "axis" : CATEGORIES[3],
        "value": -1
    }, {
        "app"  : applications[0],
        "axis" : CATEGORIES[4],
        "value": 0
    }, {
        "app"  : applications[0],
        "axis" : CATEGORIES[5],
        "value": 2
    }]
];
```

## RequireJS Optimization

Module-based project uses [RequireJS](http://requirejs.org/). After making any javascript or css changes, optimize the project using [RequireJS Optimizer](http://requirejs.org/docs/optimization.html). Optimizer combines related scripts together into build layers and minifies them via [UglifyJS](https://github.com/mishoo/UglifyJS) (the default). Requires [Node.js](http://nodejs.org).

```bash
npm install -g requirejs
 d cd-maturity-model
cp -f js/require/require.min.js dist/
node build/r.js -o build/build.js
node build/r.js -o cssIn=css/radar.css out=dist/main-built.css
```

[![Optimizing Project](https://github.com/garystafford/cd-maturity-model/blob/requirejs/images/optimizing_thumbnail.png?raw=true)](https://github.com/garystafford/cd-maturity-model/blob/requirejs/images/optimizing.png?raw=true)

## Hosting Project

To host the project, after optimizing, you only need the following items:

- `index.html` file
- `favicon.ico` file
- `dist` directory

## Hosting Project on Apache with Docker

Run commands above first, then:

```bash
docker build -t apache2 .
docker run -dit --name cd-maturity-model -p 8082:80 apache2
```

Point your browser to `http://localhost:8082/`

## Helpful Links

- d3 and Radar Charts

  - <http://www.visualcinnamon.com/2013/09/making-d3-radar-chart-look-bit-better.html>
  - <https://gist.github.com/nbremer>
  - <https://gist.github.com/nbremer/6506614>
  - <http://bl.ocks.org/nbremer/6506614>
  - <https://github.com/alangrafu/radar-chart-d3>
  - <http://graves.cl/radar-chart-d3/>

- SVG Tips

  - <http://www.petercollingridge.co.uk/data-visualisation/svg-mouseover-tricks>
  - <http://bl.ocks.org/aaizemberg/78bd3dade9593896a59d>

- RequireJS

  - <https://github.com/requirejs>
  - <http://requirejs.org/docs/api.html>
  - <http://tech.pro/blog/1639/using-rjs-to-optimize-your-requirejs-project>
  - <http://www.sitepoint.com/understanding-requirejs-for-effective-javascript-module-loading/>
  - <https://github.com/volojs/create-template>
  - <http://www.ringabell.org/en/un-simple-guide-pour-debuter-avec-requirejs/>

- Javascript Tips and Patterns (Module pattern)

  - <http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript>
  - <http://www.xenoveritas.org/blog/xeno/the-correct-way-to-clone-javascript-arrays>
