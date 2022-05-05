import * as d3 from 'd3';

import data from '../data/projet_dataviz.geojson'
//import puppeteer from 'puppeteer';

import './pays.js'

const margin = {
        top: 60,
        right: 45,
        bottom: 60,
        left: 45
    },
    width = window.innerWidth - margin.left - margin.right,
    height = window.innerHeight - margin.top - margin.bottom;

const svg = d3.select("#map")
    .append("svg")
    .attr("width", width + margin.right)
    .attr("height", height + margin.bottom)
    // translate this svg element to leave some margin.
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

let projection = d3.geoMercator()
    .fitSize([width, height], data)

let path = d3.geoPath()
    .projection(projection)

svg.selectAll("path")
    .data(data.features)
    .join(enter => enter.append('path')
        .attr("d", path)
        .attr("fill", d => d.properties.NAME == 'Switzerland' ? '#1DB954' : 'transparent')
        .attr("stroke", 'black')
        .attr("stroke-width", 2)
    )

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

     

