/* /* /* Top 3 chansons par genre (Circle Packing) */
import * as d3 from 'd3';
/* import data from '../../data/data-20.csv'; */
import data from '../../data/top3genres.json';


var Image = [

    {
      
      src: "assets/img/top3genres.png",
      
    }];



//description of the graph

let titleDes = d3.select("#top3genres .content .description")
    .append("h3")
    .attr("class", "description")
    .text("Description");

let des = d3.select("#top3genres .content .description")
    .append("p")
    .attr("class", "description")
    .text("Connaitre la liste de genres musicaux, c'est bien, mais connaître les musicaux en faisant partie, c'est mieux. Dans ce graphique, nous pouvons donc voir 3 chansons appartenant à ce genre. ")

// add button to go to next section
let button = d3.select("#top3genres")
     .append("button")
     .attr("id", "button")
     .text("Next")
     .on("click", function () {
          //go to next section
          window.location.href = "#topChanson";
     }
     );



//code pour trouver les 10 genres les plus récurent

 /* //get the list of 10 most recurent genre in data set
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
console.log(results) */

