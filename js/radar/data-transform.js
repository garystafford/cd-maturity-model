/**
 * Created by Gary A. Stafford on 1/29/15.
 * https://github.com/garystafford
 *
 * Transforms CD maturity scale of -2 to 3 to 0 to 100
 * -2 = 0, -1 = 20, 0 = 40, 1 = 60, 2 = 80, 3 = 100
 * formula: 20x + 40
 */

var dataTransformModule = (function () {
    var maturityData,
        sortAppData,
        sortMaturityData,
        sortNumbers;

    maturityData = JSON.parse(JSON.stringify(dataModule.maturityData));

    sortMaturityData = function (data) {
        var sortedMaturityData = [];
        if (data.length === 0) {
            return data;
        }
        var appNames = dataTransformModule.getAppNames();
        for (var i = 0; i < appNames.length; i++) {
            for (var j = 0; j < data.length; j++) {
                if (appNames[i] === data[j][0].app) {
                    sortedMaturityData.push(data[j]);
                }
            }
        }
        return sortedMaturityData;
    };

    sortAppData = function (data) {
        if (data.length === 0) {
            return data;
        }
        data = data.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });
        if(data[0] === dataModule.averageTitle && data.length > 1) {
            data.shift();
            data.push(dataModule.averageTitle);
        }
        return data;
    };

    sortNumbers = function(data) {
        return data.sort(function (a, b) {
            return a - b;
        });
    };

    return {
        transformScale          : function (value) {
            return ((value * 20) + 40);
        },
        transformScaleReverse   : function (value) {
            return ((value - 40) / 20);
        },
        getAppNames             : function () {
            var applications = [];
            for (var i = 0; i < maturityData.length; i++) {
                applications.push(maturityData[i][0].app); //Get app from first object of each sub-array
            }
            return sortAppData(applications);
        },
        getLegendNames          : function (currentSelections) {
            var dataTransformed = this.getTransformedSortedData(); // Already transformed and sorted
            var applications = [];
            if (currentSelections.length === 0) { // No data available
                return applications;
            }
            for (var i = 0; i < currentSelections.length; i++) {
                if (currentSelections[i] === dataModule.idAverageCategories) { // Average selected
                    applications.push(dataModule.averageTitle);
                } else {
                    applications.push(dataTransformed[currentSelections[i]][0].app);
                }
            }
            return sortAppData(applications);
        },
        getTransformedSortedData         : function () {
            var dataTransformed = JSON.parse(JSON.stringify(maturityData));
            var x = 0;
            for (var i = 0; i < dataTransformed.length; i++) {
                for (var j = 0; j < dataTransformed[0].length; j++) {
                    x = this.transformScale(dataTransformed[i][j].value);
                    dataTransformed[i][j].value = x;
                }
            }
            return sortMaturityData(dataTransformed);
        },
        getSelectedData         : function (currentSelections) {
            var dataTransformed = this.getTransformedSortedData(); // Already transformed and sorted
            if (currentSelections.length === 0) { // No data available
                return dataModule.emptyDataSet;
            }
            currentSelections = sortNumbers(currentSelections);
            var selectedData = [];
            for (var i = 0; i < currentSelections.length; i++) {
                if (currentSelections[i] === dataModule.idAverageCategories) {
                    selectedData.push(this.getCategoryAvgs()[0]);
                } else {
                    selectedData.push(dataTransformed[currentSelections[i]]);
                }
            }
            return selectedData;
        },
        // Create array of application objects containing average score,
        // as a percentage, across all categories (aka axis)
        getAllAppsMaturityRating: function () {
            var dataAverage = [];
            var appAverage = {};
            var x = 0;
            for (var i = 0; i < maturityData.length; i++) {
                for (var j = 0; j < maturityData[0].length; j++) {
                    x = x + this.transformScale(maturityData[i][j].value);
                }
                appAverage.app = maturityData[i][0].app;
                appAverage.avg = Math.round(x / maturityData[0].length);
                dataAverage.push(appAverage);
                x = 0;
                appAverage = {};
            }
            return dataAverage;
        },
        // Create array of categories (aka axis) objects containing average score,
        // as a percentage, across all applications
        getCategoryAvgs         : function () {
            var dataAverage = [];
            var appAverage = {};
            var x = 0;
            for (var j = 0; j < maturityData[0].length; j++) {
                for (var i = 0; i < maturityData.length; i++) {
                    x = x + this.transformScale(maturityData[i][j].value);
                }
                appAverage.app = dataModule.averageTitle;
                appAverage.axis = dataModule.categories[j];
                appAverage.value = Math.round(x / maturityData.length);
                dataAverage.push(appAverage);
                x = 0;
                appAverage = {};
            }
            return [dataAverage];
        },
        getSingleDataSet        : function (appName) {
            var i = this.getAppNames().indexOf(appName);
            return [this.getTransformedSortedData()[i]];
        }
    };
})();