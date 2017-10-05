/**
 * CD Maturity Gap Analysis
 * Financial Institution Sample Data
 * Created by Gary A. Stafford on 1/29/15
 * https://github.com/garystafford/cd-maturity-model
 */

 /*properties
  app, applications, averageTitle, axis, categoryCount, categories, definition,
  emptyDataSet, idAverageCategories, legendTitle, maturityData, maturityLevels,
  pageTitle, referenceLink1, referenceLinkTitle1, referenceLink2, referenceLinkTitle2,
  score, value
  */

/*global define */
define(function() {
    "use strict";

    var CATEGORY_COUNT,
        CATEGORIES,
        MATURITY_LEVELS,
        EMPTY_DATASET,
        ID_AVERAGE_CATEGORIES,
        applications,
        pageTitle,
        legendTitle,
        averageTitle,
        referenceLink1,
        referenceLinkTitle1,
        referenceLink2,
        referenceLinkTitle2,
        maturityData;

    /* CONSTANTS */
    CATEGORY_COUNT = 6; // currently unused

    CATEGORIES = [
        "Build Management and Continuous Integration",
        "Environments and Deployment",
        "Release Management and Compliance",
        "Testing",
        "Data Management",
        "Configuration Management"
    ];

    MATURITY_LEVELS = [{
        score: -2,
        definition: "Unranked"
    }, {
        score: -1,
        definition: "Regressive"
    }, {
        score: 0,
        definition: "Repeatable"
    }, {
        score: 1,
        definition: "Consistent"
    }, {
        score: 2,
        definition: "Quantitatively Managed"
    }, {
        score: 3,
        definition: "Optimizing"
    }];

    EMPTY_DATASET = [
        [{
            "app": "",
            "axis": CATEGORIES[0],
            value: -2
        }, {
            "app": "",
            "axis": CATEGORIES[1],
            value: -2
        }, {
            "app": "",
            "axis": CATEGORIES[2],
            value: -2
        }, {
            "app": "",
            "axis": CATEGORIES[3],
            value: -2
        }, {
            "app": "",
            "axis": CATEGORIES[4],
            value: -2
        }, {
            "app": "",
            "axis": CATEGORIES[5],
            value: -2
        }]
    ];

    ID_AVERAGE_CATEGORIES = 100;

    /* User-level variables */
    pageTitle = "CD Maturity Gap Analysis: First Federated Bank";
    legendTitle = "Banking Platforms";
    averageTitle = "Average Maturity - All Systems";
    referenceLink1 = "https://github.com/garystafford/cd-maturity-model";
    referenceLinkTitle1 = "CD Maturity Model";
    referenceLink2 = "https://github.com/garystafford/cd-maturity-model";
    referenceLinkTitle2 = "Gary A. Stafford - 2017";

    applications = [
        "Core Banking Application",
        "Internet Banking Application",
        "Human Resources Application",
        "ATM Management Application",
        "Equity Trading and Analytics Platform",
        "Risk Management Application",
        "Mobile Banking Platform (iOS)",
        "Mobile Banking Platform (Android)",
        "Purchasing and Inventory Control System",
        "Security Administration System"
    ];

    maturityData = [
        [{ //Core Banking Application
            "app": applications[0],
            "axis": CATEGORIES[0],
            "value": -1
        }, {
            "app": applications[0],
            "axis": CATEGORIES[1],
            "value": -1
        }, {
            "app": applications[0],
            "axis": CATEGORIES[2],
            "value": 1
        }, {
            "app": applications[0],
            "axis": CATEGORIES[3],
            "value": -1
        }, {
            "app": applications[0],
            "axis": CATEGORIES[4],
            "value": 0
        }, {
            "app": applications[0],
            "axis": CATEGORIES[5],
            "value": 2
        }],
        [{ //Internet Banking Application
            "app": applications[1],
            "axis": CATEGORIES[0],
            "value": 1
        }, {
            "app": applications[1],
            "axis": CATEGORIES[1],
            "value": 0
        }, {
            "app": applications[1],
            "axis": CATEGORIES[2],
            "value": 2
        }, {
            "app": applications[1],
            "axis": CATEGORIES[3],
            "value": -1
        }, {
            "app": applications[1],
            "axis": CATEGORIES[4],
            "value": 1
        }, {
            "app": applications[1],
            "axis": CATEGORIES[5],
            "value": 0
        }],
        [{ //Human Resources Application
            "app": applications[2],
            "axis": CATEGORIES[0],
            "value": 0
        }, {
            "app": applications[2],
            "axis": CATEGORIES[1],
            "value": -1
        }, {
            "app": applications[2],
            "axis": CATEGORIES[2],
            "value": 1
        }, {
            "app": applications[2],
            "axis": CATEGORIES[3],
            "value": 1
        }, {
            "app": applications[2],
            "axis": CATEGORIES[4],
            "value": 0
        }, {
            "app": applications[2],
            "axis": CATEGORIES[5],
            "value": 0
        }],
        [{ //ATM Management Application
            "app": applications[3],
            "axis": CATEGORIES[0],
            "value": 2
        }, {
            "app": applications[3],
            "axis": CATEGORIES[1],
            "value": 0
        }, {
            "app": applications[3],
            "axis": CATEGORIES[2],
            "value": 0
        }, {
            "app": applications[3],
            "axis": CATEGORIES[3],
            "value": 2
        }, {
            "app": applications[3],
            "axis": CATEGORIES[4],
            "value": 1
        }, {
            "app": applications[3],
            "axis": CATEGORIES[5],
            "value": -1
        }],
        [{ //Equity Trading and Analytics Platform
            "app": applications[4],
            "axis": CATEGORIES[0],
            "value": 1
        }, {
            "app": applications[4],
            "axis": CATEGORIES[1],
            "value": -1
        }, {
            "app": applications[4],
            "axis": CATEGORIES[2],
            "value": 0
        }, {
            "app": applications[4],
            "axis": CATEGORIES[3],
            "value": 2
        }, {
            "app": applications[4],
            "axis": CATEGORIES[4],
            "value": 0
        }, {
            "app": applications[4],
            "axis": CATEGORIES[5],
            "value": -1
        }],
        [{ //Risk Management Application
            "app": applications[5],
            "axis": CATEGORIES[0],
            "value": 2
        }, {
            "app": applications[5],
            "axis": CATEGORIES[1],
            "value": 0
        }, {
            "app": applications[5],
            "axis": CATEGORIES[2],
            "value": 1
        }, {
            "app": applications[5],
            "axis": CATEGORIES[3],
            "value": 3
        }, {
            "app": applications[5],
            "axis": CATEGORIES[4],
            "value": 1
        }, {
            "app": applications[5],
            "axis": CATEGORIES[5],
            "value": 2
        }],
        [{ //Mobile Banking Platform (iOS)
            "app": applications[6],
            "axis": CATEGORIES[0],
            "value": 2
        }, {
            "app": applications[6],
            "axis": CATEGORIES[1],
            "value": -1
        }, {
            "app": applications[6],
            "axis": CATEGORIES[2],
            "value": -1
        }, {
            "app": applications[6],
            "axis": CATEGORIES[3],
            "value": -1
        }, {
            "app": applications[6],
            "axis": CATEGORIES[4],
            "value": 1
        }, {
            "app": applications[6],
            "axis": CATEGORIES[5],
            "value": 0
        }],
        [{ //Mobile Banking Platform (Android)
            "app": applications[7],
            "axis": CATEGORIES[0],
            "value": 1
        }, {
            "app": applications[7],
            "axis": CATEGORIES[1],
            "value": 0
        }, {
            "app": applications[7],
            "axis": CATEGORIES[2],
            "value": 0
        }, {
            "app": applications[7],
            "axis": CATEGORIES[3],
            "value": -1
        }, {
            "app": applications[7],
            "axis": CATEGORIES[4],
            "value": 1
        }, {
            "app": applications[7],
            "axis": CATEGORIES[5],
            "value": 2
        }],
        [{ //Purchasing and Inventory Control System
            "app": applications[8],
            "axis": CATEGORIES[0],
            "value": -1
        }, {
            "app": applications[8],
            "axis": CATEGORIES[1],
            "value": 1
        }, {
            "app": applications[8],
            "axis": CATEGORIES[2],
            "value": 2
        }, {
            "app": applications[8],
            "axis": CATEGORIES[3],
            "value": 1
        }, {
            "app": applications[8],
            "axis": CATEGORIES[4],
            "value": 0
        }, {
            "app": applications[8],
            "axis": CATEGORIES[5],
            "value": 1
        }],
        [{ //Security Administration System
            "app": applications[9],
            "axis": CATEGORIES[0],
            "value": 1
        }, {
            "app": applications[9],
            "axis": CATEGORIES[1],
            "value": 0
        }, {
            "app": applications[9],
            "axis": CATEGORIES[2],
            "value": 2
        }, {
            "app": applications[9],
            "axis": CATEGORIES[3],
            "value": 1
        }, {
            "app": applications[9],
            "axis": CATEGORIES[4],
            "value": -1
        }, {
            "app": applications[9],
            "axis": CATEGORIES[5],
            "value": 0
        }]
    ];

    return {
        pageTitle: pageTitle,
        legendTitle: legendTitle,
        averageTitle: averageTitle,
        idAverageCategories: ID_AVERAGE_CATEGORIES,
        referenceLink1: referenceLink1,
        referenceLinkTitle1: referenceLinkTitle1,
        referenceLink2: referenceLink2,
        referenceLinkTitle2: referenceLinkTitle2,
        maturityLevels: MATURITY_LEVELS,
        categories: CATEGORIES,
        emptyDataSet: EMPTY_DATASET,
        applications: applications,
        maturityData: maturityData
    };
});
