import * as d3 from 'd3';
import data from '../data/data-20.csv';



const margin = { top: 60, right: 45, bottom: 60, left: 45 },
    width = window.innerWidth - margin.left - margin.right,
    height = window.innerHeight - margin.top - margin.bottom;
//append text to body
d3.select("section.pays")
     .append("p")
     .text("Hello world")

//change title in head
d3.select("head title")
    .text("Pays")






//create graph with d3 to show 10 most genre music from data set 
//create svg element
let svg = d3.select("section.pays")
     .append("svg")
     .attr("width", "100%")
     .attr("height", "100%")
     .attr("viewBox", "0 0 1000 1000")
     .attr("preserveAspectRatio", "xMidYMid meet")
     .attr("id", "pays")
     .style("display", "none")
     .append("g")
     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

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
var myWords = [{word: "Australian Hip Hop", size: "10"}, {word: "Pop Rap", size: "15"}, {word: "Canadian Comtemporary R&B", size: "20"}, {word: "Trap Latino", size: "25"}, {word: "Latin", size: "30"}, {word: "Reggaeton", size: "35"},{word: "Post-Teen-Pop", size: "40"},{word: "Canadian Pop", size: "45"},{word: "Dance Pop", size: "50"},{word: "Pop", size: "55"} ]