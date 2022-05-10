/* Top 3 chansons par genre (Circle Packing) */

import * as d3 from 'd3';
import data from '../../data/data-20.csv';

// set the dimensions and margins of the graph
var width = 500
var height = 500

// append the svg object to the body of the page
var svg = d3.select("#top3genres")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

 //get the list of 10 most recurent genre in data set
 let genres = data.map(d => d.Genre.replace("[", "").replace("]", "").replaceAll("'","").trim().split(","));

 let results = [];
 for (const tabGenre of genres) {
      for (const genre of tabGenre) {
           if(results.find(d => d.name === genre) === undefined){
                results.push({name : genre, iteration : 1});
           } else {
                results.find(d => d.name === genre).iteration++;
           }

      }
 }

 results.sort((a, b) => b.iteration - a.iteration);
//console.log(results)


/* let listeGenre = [];

//let trackList = [];

for (let i = 0; i < 10; i++) {
    // get genre names
    listeGenre[i] = results[i].name;
    //console.log(listeGenre[i])

    // get 3 track names for genre
    for (let j = 0; j < 3; j++) {   // 3 tracks for genre
        let track = data.filter(d => d.Genre.includes(listeGenre[i]));
        console.log(track[j].Track);
    }
}  */



//let top3 = [[results[0].name, results[0].iteration], [results[1].name, results[1].iteration], [results[2].name, results[2].iteration]];



   /*  // Filter a bit the data -> more than 1 million inhabitants
    data = data.filter(function (d) { return d.value > 10000000 })

    // Color palette for continents?
    var color = d3.scaleOrdinal()
        .domain(["Asia", "Europe", "Africa", "Oceania", "Americas"])
        .range(d3.schemeSet1);

    // Size scale for countries
    var size = d3.scaleLinear()
        .domain([0, 1400000000])
        .range([7, 55])  // circle will be between 7 and 55 px wide

    // create a tooltip
    var Tooltip = d3.select("#top3genres")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")

    // Three function that change the tooltip when user hover / move / leave a cell
    var mouseover = function (d) {
        Tooltip
            .style("opacity", 1)
    }
    var mousemove = function (d) {
        Tooltip
            .html('<u>' + d.key + '</u>' + "<br>" + d.value + " inhabitants")
            .style("left", (d3.mouse(this)[0] + 20) + "px")
            .style("top", (d3.mouse(this)[1]) + "px")
    }
    var mouseleave = function (d) {
        Tooltip
            .style("opacity", 0)
    }

    // Initialize the circle: all located at the center of the svg area
    var node = svg.append("g")
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "node")
        .attr("r", function (d) { return size(d.value) })
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .style("fill", function (d) { return color(d.region) })
        .style("fill-opacity", 0.8)
        .attr("stroke", "black")
        .style("stroke-width", 1)
        .on("mouseover", mouseover) // What to do when hovered
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)
        .call(d3.drag() // call specific function when circle is dragged
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    // Features of the forces applied to the nodes:
    var simulation = d3.forceSimulation()
        .force("center", d3.forceCenter().x(width / 2).y(height / 2)) // Attraction to the center of the svg area
        .force("charge", d3.forceManyBody().strength(.1)) // Nodes are attracted one each other of value is > 0
        .force("collide", d3.forceCollide().strength(.2).radius(function (d) { return (size(d.value) + 3) }).iterations(1)) // Force that avoids circle overlapping

    // Apply these forces to the nodes and update their positions.
    // Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
    simulation
        .nodes(data)
        .on("tick", function (d) {
            node
                .attr("cx", function (d) { return d.x; })
                .attr("cy", function (d) { return d.y; })
        });

    // What happens when a circle is dragged?
    function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(.03).restart();
        d.fx = d.x;
        d.fy = d.y;
    }
    function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }
    function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(.03);
        d.fx = null;
        d.fy = null;
    } */