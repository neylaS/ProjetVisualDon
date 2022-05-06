
import * as d3 from 'd3';
import data from '../../data/data-20.csv';

// show the 3 first tracks at the position 0,1 and 2 for the date : 01.01.21 
let tracksByDay = data.filter(d => d.Date === "01.01.21");
//console log the name of the tracks at index 0,1 and 2
console.log(tracksByDay[0])
console.log(tracksByDay[1])
console.log(tracksByDay[2])

// show the 3 first tracks at the position 0,1 and 2 for the date : 01.02.21 
let tracksByDay2 = data.filter(d => d.Date === "01.02.21");
//console log the name of the tracks at index 0,1 and 2
console.log(tracksByDay2[0])
console.log(tracksByDay2[1])
console.log(tracksByDay2[2])

// show the 3 first tracks at the position 0,1 and 2 for the date : 01.03.21 
let tracksByDay3 = data.filter(d => d.Date === "01.03.21");
//console log the name of the tracks at index 0,1 and 2
console.log(tracksByDay3[0])
console.log(tracksByDay3[1])
console.log(tracksByDay3[2])

// show the 3 first tracks at the position 0,1 and 2 for the date : 01.04.21 
let tracksByDay4 = data.filter(d => d.Date === "01.04.21");
//console log the name of the tracks at index 0,1 and 2
console.log(tracksByDay4[0])
console.log(tracksByDay4[1])
console.log(tracksByDay4[2])


// create 4 data_set
var data1 = [
    {group: "1ère Position", value: 5065542},
    {group: "2ème Position", value: 3764813},
    {group: "3ème Position", value: 3560869}
 ];
 
 var data2 = [
    {group: "1ère Position", value: 7647230},
    {group: "2ème Position", value: 3735645},
    {group: "3ème Position", value: 3013315}
 ];

 var data3 = [
    {group: "1ère Position", value: 5202794},
    {group: "2ème Position", value: 3966280},
    {group: "3ème Position", value: 3280968}
 ];
 var data4 = [
    {group: "1ère Position", value: 7540770},
    {group: "2ème Position", value: 6980543},
    {group: "3ème Position", value: 4426518}
 ];

 
 // set the dimensions and margins of the graph
 var margin = {top: 30, right: 30, bottom: 70, left: 60},
     width = 460 - margin.left - margin.right,
     height = 400 - margin.top - margin.bottom;
 
 // append the svg object to the body of the page
 var svg2 = d3.select("#Top3genres")
   .append("svg")
     .attr("width", width + margin.left + margin.right)
     .attr("height", height + margin.top + margin.bottom)
   .append("g")
     .attr("transform",
           "translate(" + margin.left + "," + margin.top + ")");
 
 // X axis
 var x = d3.scaleBand()
   .range([ 0, width ])
   .domain(data1.map(function(d) { return d.group; }))
   .padding(0.2);
 svg2.append("g")
   .attr("transform", "translate(0," + height + ")")
   .call(d3.axisBottom(x))
 
 // Add Y axis
 var y = d3.scaleLinear()
   .domain([0, 7000000])
   .range([ height, 0]);
 svg2.append("g")
   .attr("class", "myYaxis")
   .call(d3.axisLeft(y));
 

 // A function that create / update the plot for a given variable:
 function update(data) {
 
   var u = svg2.selectAll("rect")
     .data(data)
 
   u
     .enter()
     .append("rect")
     .merge(u)
     .transition()
     .duration(1000)
       .attr("x", function(d) { return x(d.group); })
       .attr("y", function(d) { return y(d.value); })
       .attr("width", x.bandwidth())
       .attr("height", function(d) { return height - y(d.value); })
       .attr("fill", "#69b3a2")
 }
 
 // Initialize the plot with the first dataset
 update(data1)
