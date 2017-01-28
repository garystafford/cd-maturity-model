/**
 * Created by Gary A. Stafford on 1/29/15
 * https://github.com/garystafford/cd-maturity-model
 *
 * Transforms CD maturity scale of -2 to 3 to 0 to 100
 * -2 = 0, -1 = 20, 0 = 40, 1 = 60, 2 = 80, 3 = 100
 * formula: 20x + 40
 */

/*properties
 app, averageTitle, avg, axis, categories, emptyDataSet,
 getAllAppsMaturityRating, getAppNames, getCategoryAvgs, getLegendNames,
 getSelectedData, getSingleDataSet, getTransformedSortedData,
 idAverageCategories, indexOf, length, localeCompare, maturityData, parse,
 push, round, sort, splice, stringify, toLowerCase, transformScale,
 transformScaleReverse, value
 */

/*global JSON, Math, define */
/*jslint plusplus: true */
define(["dataRadar"], function(dataRadar) {
    "use strict";

    var maturityData,
        sortAppData,
        sortMaturityData,
        sortNumbers,
        getAppNames,
        transformScale,
        transformScaleReverse,
        getLegendNames,
        getTransformedSortedData,
        getSelectedData,
        getAllAppsMaturityRating,
        getCategoryAvgs,
        getSingleDataSet;


    maturityData = JSON.parse(JSON.stringify(dataRadar.maturityData));

    getAppNames = function() {
        var applications = [],
            i;

        for (i = 0; i < maturityData.length; i++) {
            applications.push(maturityData[i][0].app); //Get app from first object of each sub-array
        }
        return sortAppData(applications);
    };

    sortMaturityData = function(data) {
        var sortedMaturityData = [],
            appNames,
            i,
            j;

        if (data.length === 0) {
            return data;
        }
        appNames = getAppNames();
        for (i = 0; i < appNames.length; i++) {
            for (j = 0; j < data.length; j++) {
                if (appNames[i] === data[j][0].app) {
                    sortedMaturityData.push(data[j]);
                }
            }
        }
        return sortedMaturityData;
    };

    sortAppData = function(data) {
        var index;

        if (data.length === 0) {
            return data;
        }

        data = data.sort(function(a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });

        index = data.indexOf(dataRadar.averageTitle);
        if (index > -1 && data.length > 1) {
            data.splice(index, 1);
            data.push(dataRadar.averageTitle);
        }

        return data;
    };

    sortNumbers = function(data) {
        return data.sort(function(a, b) {
            return a - b;
        });
    };

    transformScale = function(value) {
        return ((value * 20) + 40);
    };

    transformScaleReverse = function(value) {
        return ((value - 40) / 20);
    };

    getLegendNames = function(currentSelections) {
        // Already transformed and sorted
        var dataTransformed = getTransformedSortedData(),
            applications = [],
            i;

        if (currentSelections.length === 0) { // No data available
            return applications;
        }
        for (i = 0; i < currentSelections.length; i++) {
            if (currentSelections[i] === dataRadar.idAverageCategories) { // Average selected
                applications.push(dataRadar.averageTitle);
            } else {
                applications.push(dataTransformed[currentSelections[i]][0].app);
            }
        }
        return sortAppData(applications);
    };

    getTransformedSortedData = function() {
        var dataTransformed = JSON.parse(JSON.stringify(maturityData)),
            x = 0,
            i,
            j;

        for (i = 0; i < dataTransformed.length; i++) {
            for (j = 0; j < dataTransformed[0].length; j++) {
                x = transformScale(dataTransformed[i][j].value);
                dataTransformed[i][j].value = x;
            }
        }
        return sortMaturityData(dataTransformed);
    };

    getSelectedData = function(currentSelections) {
        // Already transformed and sorted
        var dataTransformed = getTransformedSortedData(),
            selectedData = [],
            i;

        if (currentSelections.length === 0) { // No data available
            return dataRadar.emptyDataSet;
        }
        currentSelections = sortNumbers(currentSelections);
        for (i = 0; i < currentSelections.length; i++) {
            if (currentSelections[i] === dataRadar.idAverageCategories) {
                selectedData.push(getCategoryAvgs()[0]);
            } else {
                selectedData.push(dataTransformed[currentSelections[i]]);
            }
        }
        return selectedData;
    };

    // Create array of application objects containing average score,
    // as a percentage, across all categories (aka axis)
    getAllAppsMaturityRating = function() {
        var dataAverage = [],
            appAverage = {},
            x = 0,
            i,
            j;

        for (i = 0; i < maturityData.length; i++) {
            for (j = 0; j < maturityData[0].length; j++) {
                x = x + transformScale(maturityData[i][j].value);
            }
            appAverage.app = maturityData[i][0].app;
            appAverage.avg = Math.round(x / maturityData[0].length);
            dataAverage.push(appAverage);
            x = 0;
            appAverage = {};
        }
        return dataAverage;
    };

    // Create array of categories (aka axis) objects containing average score,
    // as a percentage, across all applications
    getCategoryAvgs = function() {
        var dataAverage = [],
            appAverage = {},
            x = 0,
            i,
            j;

        for (j = 0; j < maturityData[0].length; j++) {
            for (i = 0; i < maturityData.length; i++) {
                x = x + transformScale(maturityData[i][j].value);
            }
            appAverage.app = dataRadar.averageTitle;
            appAverage.axis = dataRadar.categories[j];
            appAverage.value = Math.round(x / maturityData.length);
            dataAverage.push(appAverage);
            x = 0;
            appAverage = {};
        }
        return [dataAverage];
    };

    getSingleDataSet = function(appName) {
        var i,
            singleDataSet;

        i = getAppNames().indexOf(appName);
        singleDataSet = getTransformedSortedData()[i];
        return [singleDataSet];
    };

    return {
        transformScale: transformScale,
        getTransformedSortedData: getTransformedSortedData,
        getAllAppsMaturityRating: getAllAppsMaturityRating,
        getCategoryAvgs: getCategoryAvgs,
        getAppNames: getAppNames,
        transformScaleReverse: function(value) {
            return transformScaleReverse(value);
        },
        getLegendNames: function(currentSelections) {
            return getLegendNames(currentSelections);
        },
        getSelectedData: function(currentSelections) {
            return getSelectedData(currentSelections);
        },
        getSingleDataSet: function(appName) {
            return getSingleDataSet(appName);
        }
    };
});
