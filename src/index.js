import * as d3 from 'd3';

import data from '../data/projet_dataviz.geojson'
//import puppeteer from 'puppeteer';

import './pays.js'



d3.select("head title")
    .text(d.properties.NAME)

d3.select("#Germany")
    .style("display", "none")

d3.select("#France")
    .style("display", "none")

d3.select("#Italy")
    .style("display", "none")

d3.select("#Switzerland")
    .style("display", "none")

d3.select("#Austria")
    .style("display", "none")


//button back hides pays section and shows map section
d3.select("#back")
    .on("click", function () {
        d3.select("#pays")   
            .style("display", "none")
        d3.select("#map")
            .style("display", "block")
        d3.select("head title")
            .text("Map")
    })  

//on click country name, show pays section and hide map section
d3.selectAll("path")
    .on("click", function (d) {
        d3.select("#pays")
            .style("display", "block")
        d3.select("#map")
            .style("display", "none")
        d3.select("head title") 
            .text(d.properties.NAME)
    })  



//button back hides pays section and shows map section
d3.select("#back")
    .on("click", function () {
        d3.select("#Italy")
            .style("display", "none")
        d3.select("#map")
            .style("display", "block")
        d3.select("head title")
            .text("Map")
    })

//on click on italy, show pays section and hide map section

d3.selectAll("path")
    .on("click", function (d) {
        if (d.properties.NAME == 'Italy') {
            d3.select("#Italy")
                .style("display", "block")
            d3.select("#map")
                .style("display", "none")
            d3.select("head title")
                .text(d.properties.NAME)
        }
    })

//button back hides pays section and shows map section
d3.select("#back")
    .on("click", function () {
        d3.select("#France")
            .style("display", "none")
        d3.select("#map")
            .style("display", "block")
        d3.select("head title")
            .text("Map")
    })
//on click on france, show pays section and hide map section

d3.selectAll("path")
    .on("click", function (d) {
        if (d.properties.NAME == 'France') {
            d3.select("#France")
                .style("display", "block")
            d3.select("#map")
                .style("display", "none")
            d3.select("head title")
                .text(d.properties.NAME)
        }
    })


//button back hides pays section and shows map section
d3.select("#back")
    .on("click", function () {
        d3.select("#Switzerland")
            .style("display", "none")
        d3.select("#map")
            .style("display", "block")
        d3.select("head title")
            .text("Map")
    })
//on click on Switzerland, show pays section and hide map section

d3.selectAll("path")
    .on("click", function (d) {
        if (d.properties.NAME == 'Switzerland') {
            d3.select("#Switzerland")
                .style("display", "block")
            d3.select("#map")
                .style("display", "none")
            d3.select("head title")
                .text(d.properties.NAME)
        }
    })

//button back hides pays section and shows map section
d3.select("#back")
    .on("click", function () {
        d3.select("#Germany")
            .style("display", "none")
        d3.select("#map")
            .style("display", "block")
        d3.select("head title")
            .text("Map")
    })
//on click on germany, show pays section and hide map section

d3.selectAll("path")
    .on("click", function (d) {
        if (d.properties.NAME == 'Germany') {
            d3.select("#Germany")
                .style("display", "block")
            d3.select("#map")
                .style("display", "none")
            d3.select("head title")
                .text(d.properties.NAME)
        }
    })

//button back hides pays section and shows map section
d3.select("#back")
    .on("click", function () {
        d3.select("#Austria")
            .style("display", "none")
        d3.select("#map")
            .style("display", "block")
        d3.select("head title")
            .text("Map")
    })
//on click on austria, show pays section and hide map section

d3.selectAll("path")
    .on("click", function (d) {
        if (d.properties.NAME == 'Austria') {
            d3.select("#Austria")
                .style("display", "block")
            d3.select("#map")
                .style("display", "none")
            d3.select("head title")
                .text(d.properties.NAME)
        }
    })

     

