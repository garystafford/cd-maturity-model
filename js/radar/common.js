/**
 * Created by Gary A. Stafford on 2/8/15.
 * https://github.com/garystafford/cd-maturity-model
 */

/*properties
 baseUrl, config, d3, dataRadar, paths
 */

/*global requirejs */
requirejs.config({
    baseUrl: "js/radar",
    paths  : {
        d3       : "./../d3/d3.min",
        dataRadar: "./../data/data_radar"
    }
});