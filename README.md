### Continuous Delivery Maturity Model Gap Analysis Visualization Tool
Gap analysis visualization tool for the '[Continuous Delivery Maturity Model](https://secure.surveymonkey.com/_resources/28183/23008183/bf361750-7418-458f-85a6-6c07333e4986.png)'. Based on model from the book, '**Continuous Delivery:** *Reliable Software Releases through Build, Test, and Deployment Automation*', by Jez Humble and David Farley, available on [Amazon](http://www.amazon.com/dp/0321601912).  

Allows the comparison of the six categories of the CD Maturity Model across multiple applications/platforms/teams. Currently, data is stored in the `data_radar.js` file as an array of JavaScript object literals. It would be very easy to move the datasource to MongoDB or at least to a static JSON file.

```
categories = [
	"Build Management and Continuous Integration",
	"Environments and Deployment",
	"Release Management and Compliance",
	"Testing",
	"Data Management",
	"Configuration Management"
];

maturityData: [
	[{
		"app"  : "Core Banking Application",
		"axis" : categories[0],
		"value": -1
	}, {
		"app"  : "Core Banking Application",
		"axis" : categories[1],
		"value": -1
	}, {
		"app"  : "Core Banking Application",
		"axis" : categories[2],
		"value": 1
	}, {
		"app"  : "Core Banking Application",
		"axis" : categories[3],
		"value": -1
	}, {
		"app"  : "Core Banking Application",
		"axis" : categories[4],
		"value": 0
	}, {
		"app"  : "Core Banking Application",
		"axis" : categories[5],
		"value": 2
	}]
];
```

### Technology
Browser-based tool, using [d3](http://d3js.org/) JavaScript library. Visualizations rendered using JavaScript and [SVG](http://en.wikipedia.org/wiki/Scalable_Vector_Graphics).

### Preview with Sample Data
[![CD Gap Analysis](https://github.com/garystafford/cd-maturity-model/blob/requirejs/images/screenshot_thumbnail.png?raw=true)](https://github.com/garystafford/cd-maturity-model/blob/requirejs/images/screenshot.png?raw=true)

### RequireJS Optimization
Module-based project uses [RequireJS](http://requirejs.org/). After making any javascript or css changes, optimize the project using [RequireJS Optimizer](http://requirejs.org/docs/optimization.html). Optimizer combines related scripts together into build layers and minifies them via [UglifyJS](https://github.com/mishoo/UglifyJS) (the default). Requires [Node.js](http://nodejs.org).
 ```
 npm install -g requirejs
 cd cd-maturity-model
 node build/r.js -o build/build.js
 node build/r.js -o cssIn=css/radar.css out=dist/main-built.css
 ```
 [![Optimizing Project](https://github.com/garystafford/cd-maturity-model/blob/requirejs/images/optimizing_thumbnail.png?raw=true)](https://github.com/garystafford/cd-maturity-model/blob/requirejs/images/optimizing.png?raw=true)

### Helpful Links:
* d3 and Radar Charts
 * http://www.visualcinnamon.com/2013/09/making-d3-radar-chart-look-bit-better.html
 * https://gist.github.com/nbremer
 * https://gist.github.com/nbremer/6506614
 * http://bl.ocks.org/nbremer/6506614
 * https://github.com/alangrafu/radar-chart-d3
 * http://graves.cl/radar-chart-d3/
* SVG Tips
 * http://www.petercollingridge.co.uk/data-visualisation/svg-mouseover-tricks
 * http://bl.ocks.org/aaizemberg/78bd3dade9593896a59d
* Javascript Tips and Patterns (Module pattern)
 * http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript
 * http://www.xenoveritas.org/blog/xeno/the-correct-way-to-clone-javascript-arrays
* RequireJS
 * https://github.com/requirejs
 * http://requirejs.org/docs/api.html
 * http://tech.pro/blog/1639/using-rjs-to-optimize-your-requirejs-project
 * http://www.sitepoint.com/understanding-requirejs-for-effective-javascript-module-loading/
 * https://github.com/volojs/create-template
 * http://www.ringabell.org/en/un-simple-guide-pour-debuter-avec-requirejs/
