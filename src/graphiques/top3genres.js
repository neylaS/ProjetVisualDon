/* /* /* Top 3 chansons par genre (Circle Packing) */

import * as d3 from 'd3';
/* import data from '../../data/data-20.csv'; */
import data from '../../data/top3genres.json';






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



//Create the canvas and context
/* let svg3 = d3.select("#top3genres .content")
.append("svg")
.attr("width", 400)
.attr("height", 400)


var packLayout = d3.pack()
.size([300, 300]);

//get the element root from data
let root = d3.hierarchy(data)
.sum(d => d.root)
.sort((a, b) => b.root - a.root);
console.log(root)

//get the children of the root
let nodes = packLayout(root).children;
console.log(nodes)

//Pour les 10 objets du nodes, créer un nouveau cercle 
svg3.selectAll("circle")
.data(nodes)
.enter()
.append("circle") */





/* var rootNode = d3.hierarchy(data)

rootNode.sum(function(d) {
return d.name;
});

packLayout(rootNode);

var nodes = d3.select("#top3genres")
.selectAll('g')
.data(rootNode.descendants())
.join('g')


nodes
.append('circle')
  .attr('cx', 100)
  .attr('cy', 100)
  .attr('r', 50)
  .attr('stroke', 'black')
  .attr('fill', '#69a3b2');
 */



/* 	//Size of the circle pack layout
	var diameter = Math.min(width*0.9, height*0.9); */

		/* //The grey colors of the circles depend on the depth
		var colorCircle = d3.scaleOrdinal()
				.domain([0,1,2,3])
				.range(['#bfbfbf','#838383','#4c4c4c','#1c1c1c']);

		//Initialize the circle pack layout
		var pack = d3.pack()
			.padding(1)
			.size([diameter, diameter])
			.value(function(d) { return d.size; })
			.sort(function(d) { return d.ID; }); */  ///Creates a more interesting visual I think

/* var context = svg3.node().getContext("2d");
context.clearRect(0, 0, width, height);

//Create a custom element, that will not be attached to the DOM, to which we can bind the data
var detachedContainer = document.createElement("custom");
var dataContainer = d3.select(detachedContainer);
    
d3.json('../../data/top3genres.json', function(error, dataset) {

    //Create the circle packing as if it was a normal D3 thing
    var dataBinding = dataContainer.selectAll(".node")
        .data(pack.nodes(dataset))
        .enter().append("circle")
        .attr("class", function(d,i) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; })
        .attr("r", function(d) { return d.r; })
        .attr("fill", function(d) { return d.children ? colorCircle(d.depth) : "white"; });


//Select our dummy nodes and draw the data to canvas.
dataBinding.each(function(d) { 
    //Select one of the nodes/circles
    var node = d3.select(this);

    //Draw each circle
    context.fillStyle = node.attr("fill");
    context.beginPath();
    context.arc(node.attr("cx"), node.attr("cy"), node.attr("r"), 0,  2 * Math.PI, true);
    context.fill();
    context.closePath();
});	

}); */
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

    /* let TrapLatino = {
        parent : "Trap Latino",
        children : [{
            name: "DÁKITI",
            group: 1,
            size: 10
    
        }, {
            name: "Fiel",
            group: 1,
            size: 10
        }, {
            name: "Bandido",
            group: 1,
            size: 10
        }
    ] };

    let Latin =  {
        parent : "Latin",
        children : [{
            name: "Qué Más Pues?",
            group: 2,
            size: 10
    
        }, {
            name: "LA NOCHE DE ANOCHE",
            group: 2,
            size: 10
    
        }, {
            name: "AM",
            group: 2,
            size: 10
        }]};
let PopRap = {
        parent : "Pop Rap",
        children : [{
            name: "HOLIDAY,",
            group: 3,
            size: 10
        }, {
            
            name: "MONTERO",
            group: 3,
            size: 10
        }, {
            name : "Good Days",
            group: 3,
            size: 10
            
        }]};

        let Pop = {
            parent : "Pop",
         children : [{
            name: "Peaches",
            group: 4,
            size: 10
        }, {
            name: "telepatía ",
            group: 4,
            size: 10
        }, {
            name: "you broke me first",
            group: 4,
            size: 10
        }]};

        let Reggaeton = {
            parent : "Reggaeton",
            children : [{
            name: "Pareja Del Año",
            group: 5,
            size: 10
        }, {
            name: "Hawái",
            group: 5,
            size: 10
        }, {
            name: "BICHOTA",
            group: 5,
            size: 10
        }]};
        let DancePop = {
            parent : "Dance Pop",
            children : [{
            name: "Up",
            group: 6,
            size: 10
        }, {
            name: "Streets",
            group: 6,
            size: 10
        }, {
            name: "Baila Conmigo",
            group: 6,
            size: 10
        }]};
        let AustralianHipHop = {
            parent : "Australian Hip Hop",
            children : [{
            name: "WITHOUT YOU",
            group: 7,
            size: 10
        }, {
            name: "Astronaut In The Ocean",
            group: 7,
            size: 10
        }, {
            name: "Dance Monkey",
            group: 7,
            size: 10
        }]};

        let PostTeenPop = {
            parent : "Post-Teen Pop",
            children : [{
            name: "Anyone",
            group: 8,
            size: 10
        }, {
            name: "As I Am",
            group: 8,
            size: 10
        }, {
            name: "positions",
            group: 8,
            size: 10
        }
        ]};
        let CanadianPop = {
            parent : "Canadian Pop",    
            children : [{

            name: "Unstable",
            group: 9,
            size: 10
        }, {
            name: "Hold On",
            group: 9,
            size: 10
        }, {
            name: "Monster",
            group: 9,
            size: 10

        }
        ]};
        let CanadianComtemporaryRB = {
            parent : "Canadian Comtemporary R&B",
            children : [{
            name: "Blinding Lights",
            group: 10,
            size: 10
        }, {
            name: "Save Your Tears",
            group: 10,
            size: 10
        }
    ]
    }; */

// create circles for every parent 
   
  /*   let nodes = d3.hierarchy(TrapLatino)
        .sum(function (d) { return d.size; })
        .sort(function (a, b) { return b.height - a.height || b.value - a.value; });
        
    let nodes2 = d3.hierarchy(Latin)
        .sum(function (d) { return d.size; })
        .sort(function (a, b) { return b.height - a.height || b.value - a.value; });

    let nodes3 = d3.hierarchy(PopRap)
        .sum(function (d) { return d.size; })
        .sort(function (a, b) { return b.height - a.height || b.value - a.value; });

    let nodes4 = d3.hierarchy(Pop)
        .sum(function (d) { return d.size; })
        .sort(function (a, b) { return b.height - a.height || b.value - a.value; });

    let nodes5 = d3.hierarchy(Reggaeton)
        .sum(function (d) { return d.size; })
        .sort(function (a, b) { return b.height - a.height || b.value - a.value; });

    let nodes6 = d3.hierarchy(DancePop)
        .sum(function (d) { return d.size; })
        .sort(function (a, b) { return b.height - a.height || b.value - a.value; });

    let nodes7 = d3.hierarchy(AustralianHipHop)
        .sum(function (d) { return d.size; })
        .sort(function (a, b) { return b.height - a.height || b.value - a.value; });

    let nodes8 = d3.hierarchy(PostTeenPop)
        .sum(function (d) { return d.size; })
        .sort(function (a, b) { return b.height - a.height || b.value - a.value; });

    let nodes9 = d3.hierarchy(CanadianPop)
        .sum(function (d) { return d.size; })
        .sort(function (a, b) { return b.height - a.height || b.value - a.value; });

    let nodes10 = d3.hierarchy(CanadianComtemporaryRB)
        .sum(function (d) { return d.size; })
        .sort(function (a, b) { return b.height - a.height || b.value - a.value; });
 */

// A scale that gives a X target position for each group

//create the svg element

// description
let des = d3.select("#top3genres .content")
.append("p")
.attr("class", "description")
.text("Description du graphique")
 
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