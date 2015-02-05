/**
 * Created by Gary A. Stafford on 1/29/15.
 * https://github.com/garystafford
 */

/*global dataModule: true, d3 */
var dataModule = (function () {
    'use strict';

    var categories,
        maturityLevels;

    categories = [
        'Build Management and Continuous Integration',
        'Environments and Deployment',
        'Release Management and Compliance',
        'Testing',
        'Data Management',
        'Configuration Management'
    ];

    maturityLevels = [{
        score: -2,
        definition: 'Unranked'
    }, {
        score: -1,
        definition: 'Optimizing'
    }, {
        score: 0,
        definition: 'Quantitatively Managed'
    }, {
        score: 1,
        definition: 'Consistent'
    }, {
        score: 2,
        definition: 'Repeatable'
    }, {
        score: 3,
        definition: 'Regressive'
    }];

    return {
        pageTitle: 'CD Maturity Gap Analysis: First Federated Bank',
        legendTitle: 'Banking Systems',
        averageTitle: 'Average Maturity - All Systems',
        idAverageCategories: 100,
        colorScale: d3.scale.category10(),
        referenceLink_1: 'http://en.wikipedia.org/wiki/Continuous_delivery',
        referenceLinkTitle_1: 'Sample Link to Analysis Details',

        maturityLevels: maturityLevels,
        categories: categories,

        emptyDataSet: [
            [{
                'app': '',
                'axis': categories[0],
                value: -2
            }, {
                'app': '',
                'axis': categories[1],
                value: -2
            }, {
                'app': '',
                'axis': categories[2],
                value: -2
            }, {
                'app': '',
                'axis': categories[3],
                value: -2
            }, {
                'app': '',
                'axis': categories[4],
                value: -2
            }, {
                'app': '',
                'axis': categories[5],
                value: -2
            }]
        ],

        maturityData: [
            [{
                'app': 'Core Banking Application',
                'axis': categories[0],
                'value': -1
            }, {
                'app': 'Core Banking Application',
                'axis': categories[1],
                'value': -1
            }, {
                'app': 'Core Banking Application',
                'axis': categories[2],
                'value': 1
            }, {
                'app': 'Core Banking Application',
                'axis': categories[3],
                'value': -1
            }, {
                'app': 'Core Banking Application',
                'axis': categories[4],
                'value': 0
            }, {
                'app': 'Core Banking Application',
                'axis': categories[5],
                'value': 2
            }],
            [{
                'app': 'Internet Banking Application',
                'axis': categories[0],
                'value': 1
            }, {
                'app': 'Internet Banking Application',
                'axis': categories[1],
                'value': 0
            }, {
                'app': 'Internet Banking Application',
                'axis': categories[2],
                'value': 2
            }, {
                'app': 'Internet Banking Application',
                'axis': categories[3],
                'value': -1
            }, {
                'app': 'Internet Banking Application',
                'axis': categories[4],
                'value': 1
            }, {
                'app': 'Internet Banking Application',
                'axis': categories[5],
                'value': 0
            }],
            [{
                'app': 'Human Resources Application',
                'axis': categories[0],
                'value': 0
            }, {
                'app': 'Human Resources Application',
                'axis': categories[1],
                'value': -1
            }, {
                'app': 'Human Resources Application',
                'axis': categories[2],
                'value': 1
            }, {
                'app': 'Human Resources Application',
                'axis': categories[3],
                'value': 1
            }, {
                'app': 'Human Resources Application',
                'axis': categories[4],
                'value': 0
            }, {
                'app': 'Human Resources Application',
                'axis': categories[5],
                'value': 0
            }],
            [{
                'app': 'ATM Management Application',
                'axis': categories[0],
                'value': 2
            }, {
                'app': 'ATM Management Application',
                'axis': categories[1],
                'value': 0
            }, {
                'app': 'ATM Management Application',
                'axis': categories[2],
                'value': 0
            }, {
                'app': 'ATM Management Application',
                'axis': categories[3],
                'value': 2
            }, {
                'app': 'ATM Management Application',
                'axis': categories[4],
                'value': 1
            }, {
                'app': 'ATM Management Application',
                'axis': categories[5],
                'value': -1
            }],
            [{
                'app': 'Equity Trading and Analytics Platform',
                'axis': categories[0],
                'value': 1
            }, {
                'app': 'Equity Trading and Analytics Platform',
                'axis': categories[1],
                'value': -1
            }, {
                'app': 'Equity Trading and Analytics Platform',
                'axis': categories[2],
                'value': 0
            }, {
                'app': 'Equity Trading and Analytics Platform',
                'axis': categories[3],
                'value': 2
            }, {
                'app': 'Equity Trading and Analytics Platform',
                'axis': categories[4],
                'value': 0
            }, {
                'app': 'Equity Trading and Analytics Platform',
                'axis': categories[5],
                'value': -1
            }],
            [{
                'app': 'Risk Management Application',
                'axis': categories[0],
                'value': 2
            }, {
                'app': 'Risk Management Application',
                'axis': categories[1],
                'value': 0
            }, {
                'app': 'Risk Management Application',
                'axis': categories[2],
                'value': 1
            }, {
                'app': 'Risk Management Application',
                'axis': categories[3],
                'value': 3
            }, {
                'app': 'Risk Management Application',
                'axis': categories[4],
                'value': 1
            }, {
                'app': 'Risk Management Application',
                'axis': categories[5],
                'value': 2
            }],
            [{
                'app': 'Mobile Banking Platform (iOS)',
                'axis': categories[0],
                'value': 2
            }, {
                'app': 'Mobile Banking Platform (iOS)',
                'axis': categories[1],
                'value': -1
            }, {
                'app': 'Mobile Banking Platform (iOS)',
                'axis': categories[2],
                'value': -1
            }, {
                'app': 'Mobile Banking Platform (iOS)',
                'axis': categories[3],
                'value': -1
            }, {
                'app': 'Mobile Banking Platform (iOS)',
                'axis': categories[4],
                'value': 1
            }, {
                'app': 'Mobile Banking Platform (iOS)',
                'axis': categories[5],
                'value': 0
            }],
            [{
                'app': 'Mobile Banking Platform (Android)',
                'axis': categories[0],
                'value': 1
            }, {
                'app': 'Mobile Banking Platform (Android)',
                'axis': categories[1],
                'value': 0
            }, {
                'app': 'Mobile Banking Platform (Android)',
                'axis': categories[2],
                'value': 0
            }, {
                'app': 'Mobile Banking Platform (Android)',
                'axis': categories[3],
                'value': -1
            }, {
                'app': 'Mobile Banking Platform (Android)',
                'axis': categories[4],
                'value': 1
            }, {
                'app': 'Mobile Banking Platform (Android)',
                'axis': categories[5],
                'value': 2
            }],
            [{
                'app': 'Purchasing and Inventory Control System',
                'axis': categories[0],
                'value': -1
            }, {
                'app': 'Purchasing and Inventory Control System',
                'axis': categories[1],
                'value': 1
            }, {
                'app': 'Purchasing and Inventory Control System',
                'axis': categories[2],
                'value': 2
            }, {
                'app': 'Purchasing and Inventory Control System',
                'axis': categories[3],
                'value': 1
            }, {
                'app': 'Purchasing and Inventory Control System',
                'axis': categories[4],
                'value': 0
            }, {
                'app': 'Purchasing and Inventory Control System',
                'axis': categories[5],
                'value': 1
            }],
            [{
                'app': 'Security Adminisration System',
                'axis': categories[0],
                'value': 1
            }, {
                'app': 'Security Adminisration System',
                'axis': categories[1],
                'value': 0
            }, {
                'app': 'Security Adminisration System',
                'axis': categories[2],
                'value': 2
            }, {
                'app': 'Security Adminisration System',
                'axis': categories[3],
                'value': 1
            }, {
                'app': 'Security Adminisration System',
                'axis': categories[4],
                'value': -1
            }, {
                'app': 'Security Adminisration System',
                'axis': categories[5],
                'value': 0
            }]
        ]
    };
}());