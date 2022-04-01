import * as d3 from 'd3';

//const carte = '../datasets/projet_dataviz.geojson'

const margin = { top: 5, right: 5, bottom: 5, left: 5 },
  width = document.querySelector("body").clientWidth,
  height = 500;

const svg = d3.select("#suisse").attr("viewBox", [0, 0, width, height]);

let projection = d3.geoMercator()
    .fitSize([width, height], data)
    .scale(3000)

let path = d3.geoPath()
    .projection(projection)

d3.json("../datasets/projet_dataviz.geojson")
    .then((data) => {
        console.log(data)
    });

svg.selectAll("path")
    .data(data.features)
    .join(enter => enter.append('path')
        .attr("d", path)
        .attr("fill", "none")
        .attr("stroke-width", 1))