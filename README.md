[![Build Status](https://travis-ci.org/garystafford/cd-maturity-model.svg?branch=requirejs)](https://travis-ci.org/garystafford/cd-maturity-model)

# CD Maturity Model - Gap Analysis Visualization Tool

A gap analysis visualization tool for the '[Continuous Delivery Maturity Model](https://secure.surveymonkey.com/_resources/28183/23008183/bf361750-7418-458f-85a6-6c07333e4986.png)'. Based on model from the book, '**Continuous Delivery:** _Reliable Software Releases through Build, Test, and Deployment Automation_', by Jez Humble and David Farley, available on [Amazon](http://www.amazon.com/dp/0321601912).

This JavaScript-based application displays a visual comparison, based on a radar graph, also known as a spider graph, of the six areas of practice of the CD Maturity Model, across multiple applications platforms, business units, or functional divisions within your SDLC.

The Maturity Model Gap Analysis Tool is applicable to many discipline, not only Continuous Delivery. The application is built to be fully configurable and easily adaptable, by modifying the data file (`js/data/data_radar.js`). The default data file contains a sample data set, based on a fictions financial institution's gap analysis.

[![CD Maturity Model - Gap Analysis Visualization Tool](https://github.com/garystafford/cd-maturity-model/blob/requirejs/images/CD_Maturity_Model_Video.jpg)](http://www.youtube.com/watch?v=YWGNw6VvKBc "CD Maturity Model - Gap Analysis Visualization Tool")

<!-- [![CD Gap Analysis](https://github.com/garystafford/cd-maturity-model/blob/requirejs/images/CD_example_thumbnail.png?raw=true)](https://github.com/garystafford/cd-maturity-model/blob/requirejs/images/CD_example.png?raw=true) -->

 ## Quick Start

To install this project locally, `git clone` the `requirejs` branch from [GitHub](https://github.com/garystafford/cd-maturity-model/tree/requirejs):

```bash
git clone --branch requirejs --single-branch --depth 1 \
  https://github.com/garystafford/cd-maturity-model.git
cd cd-maturity-model
```

## D3.js Data-Driven Documents

The application is a browser-based tool, which uses the [d3](http://d3js.org/) JavaScript library. Visualizations are rendered using JavaScript and [SVG](http://en.wikipedia.org/wiki/Scalable_Vector_Graphics).

## RequireJS Optimization

Module-based project uses [RequireJS](http://requirejs.org/). After making any javascript or css changes, optimize the project using [RequireJS Optimizer](http://requirejs.org/docs/optimization.html). Optimizer combines related scripts together into build layers and minifies them via [UglifyJS](https://github.com/mishoo/UglifyJS) (the default). This project requires [Node.js](http://nodejs.org).

```bash
npm install -g requirejs
mkdir dist/ || echo 'dist/ folder already exists...'
cp -f js/require_2_3_5/require.min.js dist/
cp -f favicon.png dist/
node build/r_2_3_5/r.js -o build/build.js
node build/r_2_3_5/r.js -o cssIn=css/radar.css out=dist/main-built.css
```

[![Optimizing Project](https://github.com/garystafford/cd-maturity-model/blob/requirejs/images/optimizing_thumbnail.png?raw=true)](https://github.com/garystafford/cd-maturity-model/blob/requirejs/images/optimizing.png?raw=true)

## Data-Driven Visualization

Currently, the CD Maturity Model data is stored in the `js/data/data_radar.js` file, as an array of JavaScript object literals. It would be very easy to convert the project to use a data source, such as a static JSON or YAML file, or MongoDB database.

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

## Hosting Project

To host this project, after optimizing, you only need the following items:

- `index.html` file
- `dist/` directory

## Hosting Project on Apache with Docker

This project includes a `Dockerfile` for local development and hosting of the app, on Apache web server, in a Docker container. After running the 'RequireJS Optimization' commands above:

```bash
docker build -t apache2 .
docker run -d --name cd-maturity-model -p 8082:80 apache2
```

Point your browser to `http://localhost:8082/`

## Rapid Development

To quickly rebuild and re-containerize the application, during development, run the following:

```bash
rm -rf dist/* \
  && cp -f js/require_2_3_5/require.min.js dist/ \
  && cp -f favicon.png dist/ \
  && node build/r_2_3_5/r.js -o build/build.js \
  && node build/r_2_3_5/r.js -o cssIn=css/radar.css out=dist/main-built.css \
  && docker rm -f cd-maturity-model \
  && docker build -t apache2 . \
  && docker run -d --name cd-maturity-model -p 8082:80 apache2
```

## Infrastructure as Code Maturity Model

This project now includes a second data file (`js/data/iac_radar.js`), based on the IaC Maturity Model. To use IaC sample data, rename the file to `data_radar.js`; it will be automatically included in the build. Alternately, change the name of data file that gets included, by modifying the `build/build.js` and `js/radar/common.js` files. The data file contains a sample data set, based on a fictions financial institution's gap analysis.

[![IaC Gap Analysis](https://github.com/garystafford/cd-maturity-model/blob/requirejs/images/IaC_example_thumbnail.png?raw=true)](https://github.com/garystafford/cd-maturity-model/blob/requirejs/images/IaC_example.png?raw=true)

The CD Maturity Model can be easily adapted to the evolving [Infrastructure as Code (IaC) Maturity Model](https://programmaticponderings.com/2016/11/25/infrastructure-as-code-maturity-model/).

[![IaC Maturity Model](https://github.com/garystafford/cd-maturity-model/blob/requirejs/images/IaC_Maturity_Model%20v2_1.png?raw=true)](https://github.com/garystafford/cd-maturity-model/blob/requirejs/images/IaC_Maturity_Model%20v2_1.pdf)

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
