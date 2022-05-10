// import d3 library
import * as d3 from 'd3';
import data from '../../data/data-20.csv';

// set the dimensions and margins of the graph
var width = 500
var height = 500

var margin = { top: 100, right: 0, bottom: 0, left: 0 },
    width = 460 - margin.left - margin.right,
    height = 460 - margin.top - margin.bottom,
    innerRadius = 90,
    outerRadius = Math.min(width, height) / 2;

// append the svg object to the body of the page
var svg = d3.select("#artiste")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + (width / 2 + margin.left) + "," + (height / 2 + margin.top) + ")");

// get the list of 10 recurent artists in data set
let artists = data.map(d => d.Artist.replace("[", "").replace("]", "").replaceAll("'", "").trim().split(","));

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
//console.log(results)

//create list of 10 most recurent artists
let listeArtist = [];
for (let i = 0; i < 10; i++) {
    listeArtist[i] = results[i].name;
    console.log(listeArtist[i])
}

// get the list of tracks
let tracks = data.map(d => d.TrackName);
console.log(tracks)

// for each artist in listeArtist, add number of streams for each track
let numberStreams = [];
for (const artist of listeArtist) { // for each artist
    for (const track of tracks) { // for each track 
        if (track.includes(artist)) { // if artist is in track
            numberStreams.push(track.filter(d => d.includes(artist)).length); // add number of streams for artist
        } else { // if artist is not in track
            numberStreams.push(0); // add 0 to numberStreams
        }
    }
}
console.log(numberStreams)  // number of streams for each artist