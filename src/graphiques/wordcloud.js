import * as d3 from 'd3';
import data from '../../data/data-20.csv';
import * as cloud from 'd3-cloud';

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
 console.log(results)

// List of words
var myWords = [{word: "Australian Hip Hop", size: "30"}, {word: "Pop Rap", size: "35"}, {word: "Canadian Comtemporary R&B", size: "40"}, {word: "Trap Latino", size: "45"}, {word: "Latin", size: "50"}, {word: "Reggaeton", size: "55"},{word: "Post-Teen-Pop", size: "50"},{word: "Canadian Pop", size: "65"},{word: "Dance Pop", size: "75"},{word: "Pop", size: "100"} ]

// set the dimensions and margins of the graph
const margin = {
    top: 100,
    right: 100,
    bottom: 100,
    left: 100
},
width = window.innerWidth - margin.left - margin.right,
height = window.innerHeight - margin.top - margin.bottom;

//create graph with d3 to show 10 most genre music from data set 
//create svg element
let svg = d3.select("#wordCloud")
 .append("svg")
 .attr("width", "100%")
 .attr("height", "100%")
 .attr("viewBox", "0 0 1000 1000")
 .attr("preserveAspectRatio", "xMidYMid meet")
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

