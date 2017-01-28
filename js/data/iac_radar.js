/**
 * Infrastructure as Code Maturity Gap Analysis Sample Data
 * Created by Gary A. Stafford on 1/28/17
 * https://github.com/garystafford/cd-maturity-model
 */

/*properties
 app, applications, averageTitle, axis, categories, definition, emptyDataSet,
 idAverageCategories, legendTitle, maturityData, maturityLevels, pageTitle,
 referenceLink, referenceLinkTitle, score, value
 */

/*global define */
define(function () {
    "use strict";
    var CATEGORIES,
        MATURITY_LEVELS,
        EMPTY_DATASET,
        ID_AVERAGE_CATEGORIES,
        applications,
        pageTitle,
        legendTitle,
        averageTitle,
        referenceLink,
        referenceLinkTitle,
        maturityData;

    /* CONSTANTS */
    CATEGORIES = [
        "Development",
        "Continuous Integration",
        "Provisioning",
        "Management",
        "Observability"
    ];

    MATURITY_LEVELS = [{
        score     : -2,
        definition: "Unranked"
    }, {
        score     : -1,
        definition: "Regressive"
    }, {
        score     : 0,
        definition: "Repeatable"
    }, {
        score     : 1,
        definition: "Consistent"
    }, {
        score     : 2,
        definition: "Managed"
    }, {
        score     : 3,
        definition: "Optimizing"
    }];

    EMPTY_DATASET = [
        [{
            "app" : "",
            "axis": CATEGORIES[0],
            value : -2
        }, {
            "app" : "",
            "axis": CATEGORIES[1],
            value : -2
        }, {
            "app" : "",
            "axis": CATEGORIES[2],
            value : -2
        }, {
            "app" : "",
            "axis": CATEGORIES[3],
            value : -2
        }, {
            "app" : "",
            "axis": CATEGORIES[4],
            value : -2
        }, {
            "app" : "",
            "axis": CATEGORIES[5],
            value : -2
        }]
    ];

    ID_AVERAGE_CATEGORIES = 100;

    /* User-level variables */
    pageTitle = "Infrastructure as Code Maturity Gap Analysis: Large Financial Institution, Inc.";
    legendTitle = "Banking Platforms";
    averageTitle = "Average Maturity - All Systems";
    referenceLink = "http://en.wikipedia.org/wiki/Continuous_delivery";
    referenceLinkTitle = "Sample Link to Analysis Details";

    applications = [
        "Core Banking",
        "Internet Banking",
        "Risk Management",
        "Mobile Banking",
    ];

    maturityData = [
        [{ //Core Banking Platform
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
        }],
        [{ //Internet Banking Platform
            "app"  : applications[1],
            "axis" : CATEGORIES[0],
            "value": 1
        }, {
            "app"  : applications[1],
            "axis" : CATEGORIES[1],
            "value": 0
        }, {
            "app"  : applications[1],
            "axis" : CATEGORIES[2],
            "value": 2
        }, {
            "app"  : applications[1],
            "axis" : CATEGORIES[3],
            "value": -1
        }, {
            "app"  : applications[1],
            "axis" : CATEGORIES[4],
            "value": 1
        }, {
            "app"  : applications[1],
            "axis" : CATEGORIES[5],
            "value": 0
        }],
        [{ //Risk Management Platform
            "app"  : applications[2],
            "axis" : CATEGORIES[0],
            "value": 0
        }, {
            "app"  : applications[2],
            "axis" : CATEGORIES[1],
            "value": -1
        }, {
            "app"  : applications[2],
            "axis" : CATEGORIES[2],
            "value": 1
        }, {
            "app"  : applications[2],
            "axis" : CATEGORIES[3],
            "value": 1
        }, {
            "app"  : applications[2],
            "axis" : CATEGORIES[4],
            "value": 0
        }, {
            "app"  : applications[2],
            "axis" : CATEGORIES[5],
            "value": 0
        }],
        [{ //Mobile Banking Platform
            "app"  : applications[3],
            "axis" : CATEGORIES[0],
            "value": 2
        }, {
            "app"  : applications[3],
            "axis" : CATEGORIES[1],
            "value": 0
        }, {
            "app"  : applications[3],
            "axis" : CATEGORIES[2],
            "value": 0
        }, {
            "app"  : applications[3],
            "axis" : CATEGORIES[3],
            "value": 2
        }, {
            "app"  : applications[3],
            "axis" : CATEGORIES[4],
            "value": 1
        }, {
            "app"  : applications[3],
            "axis" : CATEGORIES[5],
            "value": -1
        }]
    ];

    return {
        pageTitle          : pageTitle,
        legendTitle        : legendTitle,
        averageTitle       : averageTitle,
        idAverageCategories: ID_AVERAGE_CATEGORIES,
        referenceLink      : referenceLink,
        referenceLinkTitle : referenceLinkTitle,
        maturityLevels     : MATURITY_LEVELS,
        categories         : CATEGORIES,
        emptyDataSet       : EMPTY_DATASET,
        applications       : applications,
        maturityData       : maturityData
    };
});
