/**
 * Infrastructure as Code Maturity Gap Analysis
 * Financial Institution Sample Data
 * Created by Gary A. Stafford on 1/28/17
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
    CATEGORY_COUNT = 5; // currently unused

    CATEGORIES = [
        "Development",
        "Continuous Integration",
        "Provisioning",
        "Management",
        "Observability"
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
        definition: "Managed"
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
        }]
    ];

    ID_AVERAGE_CATEGORIES = 100;

    /* User-level variables */
    pageTitle = "IaC Maturity Gap Analysis: First Federated Bank";
    legendTitle = "Banking Platforms";
    averageTitle = "Average Maturity - All Systems";
    referenceLink1 = "https://github.com/garystafford/cd-maturity-model";
    referenceLinkTitle1 = "CD Maturity Model";
    referenceLink2 = "https://github.com/garystafford/cd-maturity-model";
    referenceLinkTitle2 = "Gary A. Stafford - 2017";

    applications = [
        "Commercial Lending",
        "Core Banking",
        "Internet Banking",
        "Investment Services",
        "Mobile Banking",
        "Risk Management"
    ];

    maturityData = [
        [{ //Commercial Lending
            "app": applications[0],
            "axis": CATEGORIES[0],
            "value": -1
        }, {
            "app": applications[0],
            "axis": CATEGORIES[1],
            "value": 1
        }, {
            "app": applications[0],
            "axis": CATEGORIES[2],
            "value": -1
        }, {
            "app": applications[0],
            "axis": CATEGORIES[3],
            "value": 0
        }, {
            "app": applications[0],
            "axis": CATEGORIES[4],
            "value": 2
        }],
        [{ //Core Banking
            "app": applications[1],
            "axis": CATEGORIES[0],
            "value": 3
        }, {
            "app": applications[1],
            "axis": CATEGORIES[1],
            "value": 2
        }, {
            "app": applications[1],
            "axis": CATEGORIES[2],
            "value": -1
        }, {
            "app": applications[1],
            "axis": CATEGORIES[3],
            "value": 1
        }, {
            "app": applications[1],
            "axis": CATEGORIES[4],
            "value": 0
        }],
        [{ //Internet Banking
            "app": applications[2],
            "axis": CATEGORIES[0],
            "value": 1
        }, {
            "app": applications[2],
            "axis": CATEGORIES[1],
            "value": 2
        }, {
            "app": applications[2],
            "axis": CATEGORIES[2],
            "value": -1
        }, {
            "app": applications[2],
            "axis": CATEGORIES[3],
            "value": 0
        }, {
            "app": applications[2],
            "axis": CATEGORIES[4],
            "value": 2
        }],
        [{ //Investment Services
            "app": applications[3],
            "axis": CATEGORIES[0],
            "value": 1
        }, {
            "app": applications[3],
            "axis": CATEGORIES[1],
            "value": 2
        }, {
            "app": applications[3],
            "axis": CATEGORIES[2],
            "value": 1
        }, {
            "app": applications[3],
            "axis": CATEGORIES[3],
            "value": 2
        }, {
            "app": applications[3],
            "axis": CATEGORIES[4],
            "value": -1
        }],
        [{ //Mobile Banking
            "app": applications[4],
            "axis": CATEGORIES[0],
            "value": 0
        }, {
            "app": applications[4],
            "axis": CATEGORIES[1],
            "value": 2
        }, {
            "app": applications[4],
            "axis": CATEGORIES[2],
            "value": 1
        }, {
            "app": applications[4],
            "axis": CATEGORIES[3],
            "value": -1
        }, {
            "app": applications[4],
            "axis": CATEGORIES[4],
            "value": 0
        }],
        [{ //Risk Management
            "app": applications[5],
            "axis": CATEGORIES[0],
            "value": 1
        }, {
            "app": applications[5],
            "axis": CATEGORIES[1],
            "value": 1
        }, {
            "app": applications[5],
            "axis": CATEGORIES[2],
            "value": -1
        }, {
            "app": applications[5],
            "axis": CATEGORIES[3],
            "value": 0
        }, {
            "app": applications[5],
            "axis": CATEGORIES[4],
            "value": 2
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
        categoryCount: CATEGORY_COUNT,
        categories: CATEGORIES,
        emptyDataSet: EMPTY_DATASET,
        applications: applications,
        maturityData: maturityData
    };
});
