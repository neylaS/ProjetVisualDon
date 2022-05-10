import * as d3 from 'd3';
import data from '../../data/data-20.csv';
import {event as currentEvent} from 'd3-selection';


// show the 5 first tracks at the position 0,1 and 2 for the date : 01.01.21 
let tracksByDay = data.filter(d => d.Date === "01.01.21");
//console log the name of the tracks at index 0,1 and 2
console.log(tracksByDay[0])
console.log(tracksByDay[1])
console.log(tracksByDay[2])
console.log(tracksByDay[3])
console.log(tracksByDay[4])


// show the 5 first tracks at the position 0,1 and 2 for the date : 01.02.21 
let tracksByDay2 = data.filter(d => d.Date === "01.02.21");
//console log the name of the tracks at index 0,1 and 2
console.log(tracksByDay2[0])
console.log(tracksByDay2[1])
console.log(tracksByDay2[2])
console.log(tracksByDay2[3])
console.log(tracksByDay2[4])

// show the 5 first tracks at the position 0,1 and 2 for the date : 01.03.21 
let tracksByDay3 = data.filter(d => d.Date === "01.03.21");
//console log the name of the tracks at index 0,1 and 2
console.log(tracksByDay3[0])
console.log(tracksByDay3[1])
console.log(tracksByDay3[2])
console.log(tracksByDay3[3])
console.log(tracksByDay3[4])

// show the 5 first tracks at the position 0,1 and 2 for the date : 01.04.21 
let tracksByDay4 = data.filter(d => d.Date === "01.04.21");
//console log the name of the tracks at index 0,1 and 2
console.log(tracksByDay4[0])
console.log(tracksByDay4[1])
console.log(tracksByDay4[2])
console.log(tracksByDay4[3])
console.log(tracksByDay4[4])





// create 4 data_set


var data1 = [

    {
        group: "1ère Position",
        value: 5065542,
        src: "assets/img/Badbunny.png",
        legend : "Dakiti de Bad Bunny"
    },
    {
        group: "2ème Position",
        value: 3764813,
        src: "assets/img/Theweeknd.png",
        legend : "Blinding Lights de The Weeknd"
    },
    {
        group: "3ème Position",
        value: 3560869,
        src: "assets/img/Karolg.png",
        legend : "Blinding Lights de The Weeknd"
    },
    {
        group: "4ème Position",
        value: 3402064,
        src: "assets/img/24Goldn.png",
        legend : "Blinding Lights de The Weeknd"
    },
    {
        group: "5ème Position",
        value: 2939820,
        src: "assets/img/Ariannagrande.png",
        legend : "Blinding Lights de The Weeknd"
    }
];

var data2 = [{
        group: "1ère Position",
        value: 7647230,
        src: "assets/img/Oliviarodrigo.png",
        legend : "Blinding Lights de The Weeknd"
    },
    {
        group: "2ème Position",
        value: 3735645,
        src: "assets/img/Badbunny.png",
        legend : "Blinding Lights de The Weeknd"
    },
    {
        group: "3ème Position",
        value: 3013315,
        src: "assets/img/Theweeknd.png",
        legend : "Blinding Lights de The Weeknd"
    },
    {
        group: "4ème Position",
        value: 3000536,
        src: "assets/img/Theweeknd.png",
        legend : "Blinding Lights de The Weeknd"
    },
    {
        group: "5ème Position",
        value: 2858425,
        src: "assets/img/24Goldn.png",
        legend : "Blinding Lights de The Weeknd"
    }
];

var data3 = [{
        group: "1ère Position",
        value: 5202794,
        src: "assets/img/Oliviarodrigo.png",
        legend : "Blinding Lights de The Weeknd"
    },
    {
        group: "2ème Position",
        value: 3966280,
        src: "assets/img/Theweeknd.png",
        legend : "Blinding Lights de The Weeknd"
    },
    {
        group: "3ème Position",
        value: 3280968,
        src: "assets/img/Theweeknd.png",
        legend : "Blinding Lights de The Weeknd"
    },
    {
        group: "4ème Position",
        value: 3156979,
        src: "assets/img/Kaliuchis.png",
        legend : "Blinding Lights de The Weeknd"
    },
    {
        group: "5ème Position",
        value: 3151274,
        src: "assets/img/Badbunny.png",
        legend : "Blinding Lights de The Weeknd"
    }
];
var data4 = [{
        group: "1ère Position",
        value: 7540770,
        src: "assets/img/Justinbieber.png",
        legend : "Blinding Lights de The Weeknd"
    },
    {
        group: "2ème Position",
        value: 6980543,
        src: "assets/img/Lilnasx.png",
        legend : "Blinding Lights de The Weeknd"
    },
    {
        group: "3ème Position",
        value: 4426518,
        src: "assets/img/Maskwolf.png",
        legend : "Blinding Lights de The Weeknd"
    },
    {
        group: "4ème Position",
        value: 3905019,
        src: "assets/img/Oliviarodrigo.png",
        legend : "Blinding Lights de The Weeknd"
    },
    {
        group: "5ème Position",
        value: 3753723,
        src: "assets/img/Theweeknd.png",
        legend : "Blinding Lights de The Weeknd"
    }
];



// set the dimensions and margins of the graph
var margin = {
        top: 30,
        right: 30,
        bottom: 70,
        left: 60
    },
    width = 600 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;


// append the svg object to the body of the page
let svg2 = d3.select("#topChanson")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


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
    .domain([0, 8000000])
    .range([height, 0]);
svg2.append("g")
    .attr("class", "myYaxis")
    .call(d3.axisLeft(y));






// A function that create / update the plot for a given variable:
function update(data) {

    var u = svg2.selectAll("rect")
        .data(data)

    u.enter()
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
        .attr("opacity", 0.5)

    
    //append an image to the circles
    svg2.selectAll("image")
        .data(data)
        .enter()
        .append("image")
        .attr("xlink:href", function (d) {
            return d.src;
        })
        .attr("x", function (d) {
            return x(d.group) + x.bandwidth() / 2 - 20;
        })
        .attr("y", function (d) {
            return y(d.value) - 20;
        })
        .attr("width", 40)
        .attr("height", 40)
        .attr("opacity", 1)



}

// Initialize the plot with the first dataset
update(data1)
//when on click on the button, update the plot with the second dataset and the position of the circles

//when on click on the button, update the images with the second dataset and the position of the circles




d3.select("#button2").on("click", function () {
    update(data2)
    d3.selectAll("image").remove()
    svg2.selectAll("image")
        .data(data2)
        .enter()
        .append("image")
        .attr("xlink:href", function (d) {
            return d.src;
        })
        .attr("x", function (d) {
            return x(d.group) + x.bandwidth() / 2 - 20;
        })
        .attr("y", function (d) {
            return y(d.value) - 20;
        })
        .attr("width", 40)
        .attr("height", 40)
        .attr("opacity", 1)

})






//when on click on the button, update the plot with the third dataset
d3.select("#button3").on("click", function () {
    update(data3)
    d3.selectAll("image").remove()
    svg2.selectAll("image")
        .data(data3)
        .enter()
        .append("image")
        .attr("xlink:href", function (d) {
            return d.src;
        })
        .attr("x", function (d) {
            return x(d.group) + x.bandwidth() / 2 - 20;
        })
        .attr("y", function (d) {
            return y(d.value) - 20;
        })
        .attr("width", 40)
        .attr("height", 40)
        .attr("opacity", 1)

})

//when on click on the button, update the plot with the fourth dataset
d3.select("#button4").on("click", function () {
    update(data4)
    d3.selectAll("image").remove()
    svg2.selectAll("image")
        .data(data4)
        .enter()
        .append("image")
        .attr("xlink:href", function (d) {
            return d.src;
        })
        .attr("x", function (d) {
            return x(d.group) + x.bandwidth() / 2 - 20;
        })
        .attr("y", function (d) {
            return y(d.value) - 20;
        })
        .attr("width", 40)
        .attr("height", 40)
        .attr("opacity", 1)

})
//when on click on the button, update the plot with the first dataset
d3.select("#button1").on("click", function () {
    update(data1)
    d3.selectAll("image").remove()
    svg2.selectAll("image")
        .data(data1)
        .enter()
        .append("image")
        .attr("xlink:href", function (d) {
            return d.src;
        })
        .attr("x", function (d) {
            return x(d.group) + x.bandwidth() / 2 - 20;
        })
        .attr("y", function (d) {
            return y(d.value) - 20;
        })
        .attr("width", 40)
        .attr("height", 40)
        .attr("opacity", 1)

})

