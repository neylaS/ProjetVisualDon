// import d3 library
import * as d3 from 'd3';
/* import data from '../../data/data-20.csv'; */
import dataArtiste from '../../data/artiste.csv';

/* var data1 = [

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
]; */


// set the dimensions and margins of the graph
const margin = {top: 100, right: 0, bottom: 0, left: 0},
    width = 460 - margin.left - margin.right,
    height = 460 - margin.top - margin.bottom,
    innerRadius = 90,
    outerRadius = Math.min(width, height) / 2;   // the outerRadius goes from the middle of the SVG area to the border

// append the svg object
const svg = d3.select("#artiste")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${width/2+margin.left}, ${height/2+margin.top})`);

d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum.csv").then( function(data) {

  // Scales
  const x = d3.scaleBand()
      .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
      .align(0)                  // This does nothing
      .domain(data.map(d => d.Country)); // The domain of the X axis is the list of states.
  const y = d3.scaleRadial()
      .range([innerRadius, outerRadius])   // Domain will be define later.
      .domain([0, 14000]); // Domain of Y is from 0 to the max seen in the data

  // Add the bars
  svg.append("g")
    .selectAll("path")
    .data(data)
    .join("path")
      .attr("fill", "#69b3a2")
      .attr("d", d3.arc()     // imagine your doing a part of a donut plot
          .innerRadius(innerRadius)
          .outerRadius(d => y(d['Value']))
          .startAngle(d => x(d.Country))
          .endAngle(d => x(d.Country) + x.bandwidth())
          .padAngle(0.01)
          .padRadius(innerRadius))

  // Add the labels
  svg.append("g")
      .selectAll("g")
      .data(data)
      .join("g")
        .attr("text-anchor", function(d) { return (x(d.Country) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "end" : "start"; })
        .attr("transform", function(d) { return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (y(d['Value'])+10) + ",0)"; })
      .append("text")
        .text(function(d){return(d.Country)})
        .attr("transform", function(d) { return (x(d.Country) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "rotate(180)" : "rotate(0)"; })
        .style("font-size", "11px")
        .attr("alignment-baseline", "middle")

});

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



// get the list of 10 recurent artists in data set