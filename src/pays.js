import * as d3 from 'd3';
import data from '../data/data-20.csv';
import * as cloud from 'd3-cloud';
import * as timeFormat from "d3";




//append text to body
d3.select("section.pays")
     .append("p")
     .text("Hello world")

//change title in head
d3.select("head title")
     .text("Pays")







//get the 5 biggest number of streams with diffrent artists
let streams = data.map(d => d.Streams);
streams.sort((a, b) => b - a);
streams = streams.slice(0, 5);
console.log(streams)

//get the name of the track that have these number of streams : 13714177, 13701177, 13628143, 13412192 , 12192526 in the data set
let tracks3 = data.filter(d => streams.includes(d.Streams));
console.log(tracks)

//get the name of the artist that have these number of streams : 13714177, 13701177, 13628143, 13412192 , 12192526 in the data set
let artists = data.filter(d => streams.includes(d.Streams));
console.log(artists)


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


//create a function to get the number of streams  for each day by adding the number of streams for each day
/*let streamsByDay = data.reduce((acc, d) => {
     if(acc[d.Date] === undefined){
          acc[d.Date] = d.Streams;
     } else {

          acc[d.Date] += d.Streams;
     }
     return acc;
}
, {});
console.log(streamsByDay)*/

//get the swith of position for each day for the track named "Drivers license"
let position = data.filter(d => d.Track === "Drivers license");
console.log(position)


// create  data_set
var data1 = [{
          group: "1ère Position",
          value: 5065542
     },
     {
          group: "2ème Position",
          value: 3764813
     },
     {
          group: "3ème Position",
          value: 3560869
     }
];

var data2 = [{
          group: "1ère Position",
          value: 7647230
     },
     {
          group: "2ème Position",
          value: 3735645
     },
     {
          group: "3ème Position",
          value: 3013315
     }
];

var data3 = [{
          group: "1ère Position",
          value: 5202794
     },
     {
          group: "2ème Position",
          value: 3966280
     },
     {
          group: "3ème Position",
          value: 3280968
     }
];
var data4 = [{
          group: "1ère Position",
          value: 7540770
     },
     {
          group: "2ème Position",
          value: 6980543
     },
     {
          group: "3ème Position",
          value: 4426518
     }
];


// set the dimensions and margins of the graph
var margin = {
          top: 30,
          right: 30,
          bottom: 70,
          left: 60
     },
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
     .range([0, width])
     .domain(data1.map(function (d) {
          return d.group;
     }))
     .padding(0.2);
svg2.append("g")
     .attr("transform", "translate(0," + height + ")")
     .call(d3.axisBottom(x))

// Add Y axis
var y = d3.scaleLinear()
     .domain([0, 7000000])
     .range([height, 0]);
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
          .attr("x", function (d) {
               return x(d.group);
          })
          .attr("y", function (d) {
               return y(d.value);
          })
          .attr("width", x.bandwidth())
          .attr("height", function (d) {
               return height - y(d.value);
          })
          .attr("fill", "#69b3a2")
}

// Initialize the plot with the first dataset
update(data1);

//on click, update the plot with a new dataset
d3.select("#button1").on("click", function () {
     update(data2);
});




// Change the dataset and update the graph
d3.selectAll("#button")
     .on("change", function (d) {
          var value = d3.select(this).property("value")
          if (value === "1") {
               update(data1)
          } else if (value === "2") {
               update(data2)
          } else if (value === "3") {
               update(data3)
          } else if (value === "4") {
               update(data4)
          }
     })


//get the list of all the tracks names and their artists

let tracks = data.map(d => d.Track);
let artists2 = data.map(d => d.Artist);
let tracksAndArtists = tracks.map((d, i) => {
     return {
          track: d,
          artist: artists2[i]
     }
});
console.log(tracksAndArtists)

//create a function that will return the names of all the artists  and filter to have only each name once alphabetically sorted

let artists3 = tracksAndArtists.map(d => d.artist);
let uniqueArtists = [...new Set(artists3)];
console.log(uniqueArtists)




const tickDuration  = 1000; //delay of an animation
const delayDuration = 2000; //delay between two years



// Feel free to change or delete any of the code you see in this editor!
var svg = d3.select("top10")
   .append("svg")
   .attr("width", width)
   .attr("height", height);

 let barPadding = (height-(margin.bottom+margin.top))/(top_n*5);

 
//separate the data by day and get the track name and artist name for each day, get the 10 firsts tracks and artists names



 let dataByDay = data.reduce((acc, d) => {
     if (acc[d.Date] === undefined) {
          acc[d.Date] = [d];
     } else {
          acc[d.Date].push(d);
     }
     return acc;
}, {});
console.log(dataByDay)

//slice the data to get the first 10 tracks and artists names
let top10Tracks = Object.values(dataByDay).map(d => d.slice(0, 10));
console.log(top10Tracks)

//with the data, make a bar chart race graph 

