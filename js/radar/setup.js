/**
 * Created by Gary A. Stafford on 1/29/15.
 * https://github.com/garystafford/cd-maturity-model
 *
 * Source code based project by Nadieh Bremer:
 * http://www.visualcinnamon.com/2013/09/making-d3-radar-chart-look-bit-better.html
 * His source code comes from https://github.com/alangrafu/radar-chart-d3
 * For a bit of extra information check the blog about it:
 * http:nbremer.blogspot.nl/2013/09/making-d3-radar-chart-look-bit-better.html
 */

/*properties
 ExtraWidthX, addEventListener, app, append, appendChild, attr, checked,
 className, colorScale, createElement, createTextNode, currentTarget, cursor,
 data, draw, enter, getAppNames, getCategoryAvgs, getElementById,
 getElementsByClassName, getLegendNames, getSelectedData, getSingleDataSet, h,
 htmlFor, id, idAverageCategories, indexOf, innerHTML, legendTitle, length,
 levels, maxValue, name, onclick, pageTitle, push, referenceLinkTitle_1,
 referenceLink_1, select, selectAll, setAttribute, splice, style, text, type,
 value, w
 */
/*global d3, dataSample, transform, document, radar, define */
/*jslint browser: true, plusplus: true, unparam: true */
define(["./../data/data", "./../d3/d3.min", "./transform", "./radar"],
    function (dataSample, d3, transform, radar) {
        "use strict";
        var colorScale,
            checkboxes,
            config,
            drawLegend,
            createCheckbox,
            createLabel,
            createAppDiv,
            createCatAvgsDiv,
            createAllAppsDiv,
            createNoAppsDiv,
            createTitleDiv,
            attachDivs,
            createModelPopup,
            createModelImg,
            createRefLink,
            initializePage;

        colorScale = dataSample.colorScale;

        //Tracks checkboxes
        checkboxes = [];

        //Options for the Radar chart, other than default
        config = {
            w          : 450,
            h          : 450,
            maxValue   : 100,
            levels     : 5,
            ExtraWidthX: 550
        };

        //Initiate legend
        drawLegend = function () {
            var legendOptions,
                svg,
                text,
                legend;

            legendOptions = transform.getLegendNames(checkboxes);

            if (typeof legendOptions === "undefined") {
                return 0;
            }

            svg = d3.select("#body")
                .selectAll("svg")
                .append("svg")
                .attr("width", config.w + 500)
                .attr("height", config.h);

            //Create the title for the legend
            text = svg.append("text")
                .attr("class", "title")
                .attr("transform", "translate(90,0)")
                .attr("x", config.w + 175 - 70)
                .attr("y", 10)
                .attr("font-size", "12px")
                .attr("fill", "#404040")
                .text(dataSample.legendTitle);

            //Initiate Legend
            legend = svg.append("g")
                .attr("class", "legend")
                .attr("height", 100)
                .attr("width", 200)
                .attr("transform", "translate(90,20)");

            //Create colour squares
            legend.selectAll("rect")
                .data(legendOptions)
                .enter()
                .append("rect")
                .attr("x", config.w + 175 - 65)
                .attr("y", function (d, i) {
                    return i * 20;
                })
                .attr("width", 10)
                .attr("height", 10)
                .style("fill", function (d, i) {
                    return colorScale(i);
                });

            //Create text next to squares
            legend.selectAll("text")
                .data(legendOptions)
                .enter()
                .append("text")
                .attr("x", config.w + 175 - 52)
                .attr("y", function (d, i) {
                    return i * 20 + 9;
                })
                .attr("font-size", "11px")
                .attr("fill", "#737373")
                .text(function (d) {
                    return d;
                });
            //.attr("onmouseover", "evt.target.setAttribute('opacity', '0.5');")
            //.attr("onmouseout", "evt.target.setAttribute('opacity','1');")
            //.attr("onclick", "radar.draw('#chart', transform.getSingleDataSet(this.textContent), this.config);drawLegend();")
            //.style("cursor", "pointer");
        };

        createCheckbox = function (app, i) {
            var newCheckbox = document.createElement("input");
            newCheckbox.type = "checkbox";
            newCheckbox.name = "app";
            newCheckbox.value = app;
            newCheckbox.id = "app" + i;
            newCheckbox.data = i;
            newCheckbox.className = "appCheckbox";
            newCheckbox.onclick = function (event) {
                if (event.currentTarget.checked) {
                    checkboxes.push(event.currentTarget.data);
                } else {
                    var index = checkboxes.indexOf(event.currentTarget.data);
                    if (index > -1) {
                        checkboxes.splice(index, 1);
                    }
                }
                radar.draw("#chart", transform.getSelectedData(checkboxes), config);
                drawLegend();
            };
            return newCheckbox;
        };

        createLabel = function (app, i) {
            var newLabel = document.createElement("label");
            newLabel.htmlFor = "app" + i;
            newLabel.appendChild(document.createTextNode(app));
            return newLabel;
        };

        createAppDiv = function (app, i) {
            var newDiv,
                tempDataSet;

            newDiv = document.createElement("div");
            tempDataSet = transform.getSingleDataSet(app);
            if (typeof tempDataSet === "undefined") { // No data available
                return newDiv;
            }
            newDiv.appendChild(createCheckbox(app, i));
            newDiv.appendChild(createLabel(app, i));
            newDiv.style.cursor = "pointer";
            newDiv.className = "appDiv";
            return newDiv;
        };

        createCatAvgsDiv = function () {
            var newDiv,
                tempDataSet,
                app;

            newDiv = document.createElement("div");
            tempDataSet = transform.getCategoryAvgs();
            if (typeof tempDataSet[0] === "undefined") { // No data available
                return newDiv;
            }
            app = tempDataSet[0][0].app;
            newDiv.appendChild(createCheckbox(app, dataSample.idAverageCategories));
            newDiv.appendChild(createLabel(app, dataSample.idAverageCategories));
            newDiv.style.cursor = "pointer";
            newDiv.className = "appDiv";
            return newDiv;
        };

        function checkAll() {
            var cbs,
                i;

            cbs = document.getElementsByClassName("appCheckbox");
            for (i = 0; i < cbs.length; i++) {
                cbs[i].checked = true;
                checkboxes.push(cbs[i].data);
            }
        }

        function checkNone() {
            var cbs,
                i;

            cbs = document.getElementsByClassName("appCheckbox");
            for (i = 0; i < cbs.length; i++) {
                cbs[i].checked = false;
            }
        }

        createAllAppsDiv = function () {
            var newDiv = document.createElement("div");
            newDiv.innerHTML = "Check All";
            newDiv.style.cursor = "pointer";
            newDiv.className = "specialDiv";
            newDiv.addEventListener("click", function () {
                checkboxes = [];
                checkAll();
                radar.draw("#chart", transform.getSelectedData(checkboxes), config);
                drawLegend();
            });
            return newDiv;
        };
        createNoAppsDiv = function () {
            var newDiv = document.createElement("div");
            newDiv.innerHTML = "Check None";
            newDiv.style.cursor = "pointer";
            newDiv.className = "specialDiv";
            newDiv.addEventListener("click", function () {
                checkboxes = [];
                checkNone();
                radar.draw("#chart", transform.getSelectedData(checkboxes), config);
                drawLegend();
            });
            return newDiv;
        };

        createTitleDiv = function () {
            var newDiv = document.createElement("div");
            newDiv.innerHTML = dataSample.legendTitle;
            newDiv.className = "titleDiv";
            return newDiv;
        };

        attachDivs = function () {
            var appNames,
                arrayLength,
                i;

            appNames = transform.getAppNames();
            arrayLength = appNames.length;
            document.getElementById("apps")
                .appendChild(createTitleDiv());
            for (i = 0; i < arrayLength; i++) {
                document.getElementById("apps")
                    .appendChild(createAppDiv(appNames[i], i));
            }
            document.getElementById("apps")
                .appendChild(createCatAvgsDiv());
            document.getElementById("apps")
                .appendChild(createAllAppsDiv());
            document.getElementById("apps")
                .appendChild(createNoAppsDiv());
        };

        createModelPopup = function () {
            var newPara = document.createElement("p");
            newPara.innerHTML = "Continuous Delivery Maturity Model";
            newPara.className = "footerLinks";
            newPara.addEventListener("click", function () {
                if (document.getElementById("model").className === "showModel") {
                    document.getElementById("model").className = "hideModel";
                } else {
                    document.getElementById("model").className = "showModel";
                }
            });
            document.getElementById("footer")
                .appendChild(newPara);
        };

        createModelImg = function () {
            var newImg = document.createElement("img");
            newImg.setAttribute("src",
                "https://secure.surveymonkey.com/_resources/28183/23008183/bf361750-7418-458f-85a6-6c07333e4986.png");
            newImg.style.cursor = "pointer";
            newImg.addEventListener("click", function () {
                document.getElementById("model").className = "hideModel";
            });
            document.getElementById("model").className = "hideModel";
            document.getElementById("model").appendChild(newImg);
        };

        createRefLink = function () {
            var newLink = document.createElement("a");
            newLink.className = "footerLinks";
            newLink.setAttribute("href", dataSample.referenceLink_1);
            newLink.innerHTML = dataSample.referenceLinkTitle_1;
            document.getElementById("footer")
                .appendChild(newLink);
        };

        initializePage = function () {
            document.getElementById("title").innerHTML = dataSample.pageTitle;
            radar.draw("#chart", transform.getCategoryAvgs(), config);
            attachDivs();
            document.getElementById("app100").checked = true;
            checkboxes.push(dataSample.idAverageCategories);
            drawLegend();
            createModelPopup();
            createModelImg();
            createRefLink();
        };

        initializePage();
    });