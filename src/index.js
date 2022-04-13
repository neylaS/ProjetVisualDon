import * as d3 from 'd3';

import data from '../data/projet_dataviz.geojson'

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
        .attr("fill", d => d.properties.NAME == 'Switzerland' ? 'red' : 'black')
        .attr("stroke-width", 1)
        )