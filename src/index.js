import * as d3 from 'd3';


//import file1 from "../datasets/chartsSwissPlus2021.csv"
import file2 from "../datasets/data.csv"

console.log(file2)


const artist = file2.map((d, i) => {
				return d.Artist;
			    	});
console.log(artist)