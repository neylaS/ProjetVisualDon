import * as d3 from 'd3';
import data from '../data/data-20.csv';

//import data2 from '../data/chartsSwissPlus2021_France.csv';
import * as cloud from 'd3-cloud';




//append text to body
d3.select("section.pays")
     .append("p")
     .text("Hello world")

//change title in head
d3.select("head title")
    .text("Pays")



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

// List of words
var myWords = [{word: "Australian Hip Hop", size: "10"}, {word: "Pop Rap", size: "15"}, {word: "Canadian Comtemporary R&B", size: "20"}, {word: "Trap Latino", size: "25"}, {word: "Latin", size: "30"}, {word: "Reggaeton", size: "35"},{word: "Post-Teen-Pop", size: "40"},{word: "Canadian Pop", size: "45"},{word: "Dance Pop", size: "50"},{word: "Pop", size: "55"} ]

// set the dimensions and margins of the graph
var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 450 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

//create graph with d3 to show 10 most genre music from data set 
//create svg element
let svg = d3.select("#pays")
     .append("svg")
     .attr("width", "50%")
     .attr("height", "50%")
     .attr("viewBox", "0 0 500 500")
     .attr("align", "center")
     .attr("preserveAspectRatio", "xMidYMid meet")
     .attr("id", "pays")
     .append("g")
     //.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
// Wordcloud features that are different from one word to the other must be here
var layout = cloud()
.size([width, height])
.words(myWords.map(function(d) { return {text: d.word, size:d.size}; }))
.padding(5)        //space between words
.rotate(function() { return ~~(Math.random() * 2) * 90; })
.fontSize(function(d) { return d.size; })      // font size of words
.on("end", draw);
layout.start();

// This function takes the output of 'layout' above and draw the words
// Wordcloud features that are THE SAME from one word to the other can be here
function draw(words) {
     svg
       .append("g")
         .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
         .selectAll("text")
           .data(words)
         .enter().append("text")
           .style("font-size", function(d) { return d.size; })
           .style("fill", "#69b3a2")
           .attr("text-anchor", "middle")
           .style("font-family", "Impact")
           .attr("transform", function(d) {
             return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
           })
           .text(function(d) { return d.text; });
   }



 //separate the data by day and get the track name and artist name for each day
     let dataByDay = data.reduce((acc, d) => {
          if(acc[d.Date] === undefined){
               acc[d.Date] = [d];
          } else {
               acc[d.Date].push(d);
          }
          return acc;
     }
     , {});
     console.log(dataByDay)

    
//get the 5 biggest number of streams with diffrent artists
let streams = data.map(d => d.Streams);
streams.sort((a, b) => b - a);
streams = streams.slice(0, 5);
console.log(streams)

//get the name of the track that have these number of streams : 13714177, 13701177, 13628143, 13412192 , 12192526 in the data set
let tracks = data.filter(d => streams.includes(d.Streams));
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


// create 2 data_set
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
  var svg2 = d3.select("#streams")
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












/*let dataDendogram = data.reduce((acc, d) => {
     if(acc[d.Artist] === undefined){
          acc[d.Artist] = [d.Track];
     } else {
          acc[d.Artist].push(d.Track);
     }
     return acc;
}
, {});
console.log(dataDendogram)*/

