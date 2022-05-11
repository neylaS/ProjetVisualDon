import * as d3 from 'd3';
import data from '../../data/data-20.csv';

var data1 = [

    {
        name : "The Weeknd",
        totStreams : "281"
            
    }
];
 var data2 = [{   
        name : "Olivia Rodrigo",
        totStreams : "252"
    }
];
  var data3 = [{
        name : "Bad Bunny",
        totStreams : "207"
    }
];
  var data4 = [{  
        name : "Justin Bieber",
        totStreams : "185"
    }
];
  var data5 = [{  
        name : "Dua Lipa",
        totStreams : "147"
    }
];
    var data6 = [{
    
        name : "Doja Cat",
        totStreams : "125"
    }
];
    var data7 = [{
    
        name : "Ariana Grande",
        totStreams : "114"
    }
];
    var data8 = [{

        name : "The Kid LAROI",
        totStreams : "104"
    }
];
    var data9 = [{
    
        name : "Tiësto",
        totStreams : "98"
    }
];
    var data10 = [{
    
      name : "Masked Wolf",
        totStreams : "96"
    },
];



// set the dimensions and margins of the graph
let margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 460 - margin.left - margin.right,
    height = 460 - margin.top - margin.bottom,
    innerRadius = 80,
    outerRadius = Math.min(width, height) / 2;   // the outerRadius goes from the middle of the SVG area to the border

    // append the svg object to the body of the page
let svg3 = d3.select("#artiste")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + ( height/2+100 )+ ")"); // Add 100 on Y translation, cause upper bars are longer

// get the list of 10 recurent artists in data set
let artists = data.map(d => d.Artist.replace("[", "").replace("]", "").replaceAll("'", "").trim().split(","));
console.log(artists);
let results = [];
for (const tabArtist of artists) {
    for (const artist of tabArtist) {
        if (results.find(d => d.name === artist) === undefined) {
            results.push({ name: artist, iteration: 1 });
        } else {
            results.find(d => d.name === artist).iteration++;
        }
    }
}
results.sort((a, b) => b.iteration - a.iteration);
console.log(results) 

//create list of 10 most recurent artists
/* let listeArtist = [];
for (let i = 0; i < 10; i++) {
    listeArtist[i] = results[i].name;
    console.log(results[i].name)
    console.log(listeArtist[i])
} */

//create table
/* let listeArtist = [
    { name: "The Weeknd", streams: 0 },
    { name: "Olivia Rodrigo", streams: 0 },
    { name: "Bad Bunny", streams: 0 },
    { name: "Justin Bieber", streams: 0 },
    { name: "Dua Lipa", streams: 0 },
    { name: "Doja Cat", streams: 0 },
    { name: "Arianna Grande", streams: 0 },
    { name: "The Kid LAROI", streams: 0 },
    { name: "Tiësto", streams: 0 },
    { name: "Masked Wolf", streams: 0 }
] */

/* let totalStreams1 = data.filter(d => d.Artist === "The Weeknd").length;
console.log(totalStreams1);

let totalStreams2 = data.filter(d => d.Artist === "Olivia Rodrigo").length;
console.log(totalStreams2);
//get the total amount of streams for bad bunny
let totalStreams3 = data.filter(d => d.Artist === "Bad Bunny").length;
console.log(totalStreams3);
let totalStreams4 = data.filter(d => d.Artist === "Justin Bieber").length; 
console.log(totalStreams4);
let totalStreams5 = data.filter(d => d.Artist === "Dua Lipa").length;
console.log(totalStreams5);
let totalStreams6 = data.filter(d => d.Artist === "Doja Cat").length;
console.log(totalStreams6);
let totalStreams7 = data.filter(d => d.Artist === "Ariana Grande").length;
console.log(totalStreams7);
let totalStreams8 = data.filter(d => d.Artist === "The Kid LAROI").length;
console.log(totalStreams8);
let totalStreams9 = data.filter(d => d.Artist === "Tiësto").length;
console.log(totalStreams9);
let totalStreams10 = data.filter(d => d.Artist === "Masked Wolf").length;
console.log(totalStreams10); */


/* // for each artist in listeArtist, add number of streams for each track
let numberStreams = [];
for (const artist of listeArtist) { // for each artist
    for (const track of tracks) { // for each track 
        if (track.includes(artist)) { // if artist is in track
            //numberStreams.push(track.filter(d => d.includes(artist)).length); // add number of streams for artist
        } else { // if artist is not in track
            numberStreams.push(0); // add 0 to numberStreams
        }
    }
}
console.log(numberStreams)  // number of streams for each artist */

// get the list of 10 recurent artists in data set
