import * as d3 from 'd3';


//import file1 from "../datasets/chartsSwissPlus2021.csv"
//import file2 from "../datasets/data.csv"

// console.log(file2)


// const artist = file2.map((d, i) => {
// 				return d.Artist;
// 			    	});
// console.log(artist)

const width = 550, height = 550;
const path = d3.geoPath();
const projection = d3.geoConicConformal()
    .center([2.454071, 46.279229])
    .scale(2600)
    .translate([width / 2, height / 2]);