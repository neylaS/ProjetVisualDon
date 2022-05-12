import * as d3 from 'd3';
/* import data from '../../data/data-20.csv'; */
import dataArtiste from '../../data/artiste.csv';


// set the dimensions and margins of the graph
const margin = {top: 100, right: 0, bottom: 0, left: 0},
    width = 460 - margin.left - margin.right,
    height = 460 - margin.top - margin.bottom,
    innerRadius = 80,
    outerRadius = Math.min(width, height) / 2;   // the outerRadius goes from the middle of the SVG area to the border

// append the svg object
const svg = d3.select("#artiste")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${width/2+margin.left}, ${height/2+margin.top})`);

d3.csv("https://raw.githubusercontent.com/neylaS/ProjetVisualDon/main/data/artiste.csv").then( function(data) {

  // Scales
  const x = d3.scaleBand()
      .range([0, 2.2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
      .align(0)                  // This does nothing
      .domain(data.map(d => d.Name)); // The domain of the X axis is the list of states.
  const y = d3.scaleRadial()
      .range([innerRadius, outerRadius])   // Domain will be define later.
      .domain([0, 400]); // Domain of Y is from 0 to the max seen in the data

  // Add the bars
  svg.append("g")
    .selectAll("path")
    .data(data)
    .join("path")
      .attr("fill", "#69b3a2")
      .attr("d", d3.arc()     // imagine your doing a part of a donut plot
          .innerRadius(innerRadius)
          .outerRadius(d => y(d['Value']))
          .startAngle(d => x(d.Name))
          .endAngle(d => x(d.Name) + x.bandwidth())
          .padAngle(0.01)
          .padRadius(innerRadius))

  // Add the labels
  svg.append("g")
      .selectAll("g")
      .data(data)
      .join("g")
        .attr("text-anchor", function(d) { return (x(d.Name) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "end" : "start"; })
        .attr("transform", function(d) { return "rotate(" + ((x(d.Name) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (y(d['Value'])+10) + ",0)"; })
      .append("text")
        .text(function(d){return(d.Name)})
        .attr("transform", function(d) { return (x(d.Name) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "rotate(180)" : "rotate(0)"; })
        .style("font-size", "11px")
        .attr("alignment-baseline", "middle")

});

// description
let des = d3.select("#artiste .content")
    .append("p")
    .attr("class", "description")
    .text("Description du graphique")

// add button to go to next section
let button = d3.select("#artiste")
     .append("button")
     .attr("id", "button")
     .text("Top")
     .on("click", function () {
          //go to next section
          window.location.href = "#wordCloud";
     }
     );

