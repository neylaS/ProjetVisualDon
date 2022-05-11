import * as d3 from 'd3';

//import puppeteer from 'puppeteer';    

import './graphiques/wordcloud.js'
import './graphiques/top3genres.js'
import './graphiques/topChanson.js'
import './graphiques/artiste.js'

//scroll snapping
const init = function(){
	let items = document.querySelectorAll('section');
	for (let i = 0; i < items.length; i++){
		items[i].style.background = randomColor({luminosity: 'light'});
	}
	cssScrollSnapPolyfill()
}
init();