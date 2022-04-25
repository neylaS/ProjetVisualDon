import * as d3 from 'd3';

import data from '../data/projet_dataviz.geojson'
import datamusic from '../data/data.json'
import { getGraph10Genres } from './graphiques/10genres';


const margin = {top : 50, right: 40, bottom: 50, left: 40},
    width = window.innerWidth - margin.left - margin.right,
    height = window.innerHeight - margin.top - margin.bottom;

const svg = d3.select("#vizArea")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    // translate this svg element to leave some margin.
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")



let projection = d3.geoMercator()
    .fitSize([width,height], data)


let path = d3.geoPath()
    .projection(projection)

svg.selectAll("path")
    .data(data.features)
    .join(enter => enter.append('path')
        .attr("d", path)
        .attr("fill", d => d.properties.NAME == 'Switzerland' ? 'red' : 'green')
        .attr("stroke-width", 3)
        .attr('cursor', 'pointer')
        .join(enter => enter.append('title') // add a title element to the path element
        .text(d => d.properties.NAME))
        


 
    )

    //création lgende
const legendWrapper1 = d3
.select("body")
.append("div")
.style("display", "flex")
.style("flex-direction", "column")
.style("align-items", "center")
.attr("class", "map");
legendWrapper1.append("h2").text("top10 des genres musicaux les plus écoutés ");


// Ajoute l'axe X --> it is a date format
const x = d3.scaleTime()
    .domain(d3.extent(dateYearData, d => d))
    .range([0, width]);
svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x));

// Add Y axis
const y = d3.scaleLinear()
    .domain([0, d3.max(entriesPerYear, d => d.amount)])
    .range([height, 0]);
svg.append("g")
    .call(d3.axisLeft(y));

// Add the area
svg.append("path")
    .datum(entriesPerYear)
    .attr("fill", "#cce5df")
    .attr("stroke", "#69b3a2")
    .attr("stroke-width", 1.5)
    .attr("d", d3.area()
        .x(d => x(d.year))
        .y0(y(0))
        .y1(d => y(d.amount))
    )

   