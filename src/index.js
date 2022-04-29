import * as d3 from 'd3';

import data from '../data/projet_dataviz.geojson'


import './pays.js'

const margin = { top: 60, right: 45, bottom: 60, left: 45 },
    width = window.innerWidth - margin.left - margin.right,
    height = window.innerHeight - margin.top - margin.bottom;

const svg = d3.select("#map")
    .append("svg")
    .attr("width", width + margin.right)
    .attr("height", height + margin.bottom)
    // translate this svg element to leave some margin.
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

// ***** Toggle section ******
function toggleSection(section) {
    // Supprime/Ajoute la classe active sur la section
    document.querySelector('section.active')?.classList.remove('active')
    document.querySelector(`${section}-section`)?.classList.add('active')
  }

// Affichage d'une section
function displaySection() {
    // S'il n'y a pas de hash (par ex, on est sur "localhost:8080/"), le défaut devient '#home'
    const section = window.location.hash || '#home'
    const sectionSplit = section.split('-')
  
    // Toggle par défaut des sections et de la navigation
    toggleSection(sectionSplit[0])
    toggleNav(sectionSplit[0])
  
  
    // Chargement des éléments custom par section
    switch(sectionSplit[0]) {
      case '#artists':
        // Est-ce qu'il y a un id ? typiquement: #artists-1234
        if(sectionSplit[1]) {
          toggleSection('#songs')
          renderSongsSection(sectionSplit[1])
        }
        else {
          renderArtistsSection()
        }
      break;
  
      case '#search':
        // On réutilise la section 'songs' en arrière plan
        toggleSection('#songs')
        // on décode la chaine de recherche pour l'afficher proprement
        renderSearchSongsSection(decodeURIComponent(sectionSplit[1]))
      break;
  
      case '#favorites':
        // On réutilise la section 'songs' en arrière plan
        toggleSection('#songs')
        // on affiche les favoris
        renderFavoritesSongsSection()
      break;
  
      case '#lyrics':
        renderLyricsSection(sectionSplit[1])
      break;
    }
  }
  
  // On link la fonction "displaySection" à l'événement hashchange pour être averti d'un changement de hash dans l'url
  window.addEventListener('hashchange', displaySection)
  
  // Affichage au chargement pour traiter l'url en cours (exemple: on ouvre un lien dans un nouvel onglet)
  displaySection()
  

let projection = d3.geoMercator()
    .fitSize([width, height], data)

let path = d3.geoPath()
    .projection(projection)

svg.selectAll("path")
    .data(data.features)
    .join(enter => enter.append('path')
        .attr("d", path)
        .attr("fill", d => d.properties.NAME == 'Switzerland' ? '#1DB954' : 'transparent')
        .attr("stroke", 'black')
        .attr("stroke-width", 2)
    )

d3.select("head title")
    .text("Map")

d3.select("#pays")
    .style("display", "none")

//button back hides pays section and shows map section
d3.select("#back")
    .on("click", function () {
        d3.select("#pays")   
            .style("display", "none")
        d3.select("#map")
            .style("display", "block")
        d3.select("head title")
            .text("Map")
    })  

//on click country name, show pays section and hide map section
d3.selectAll("path")
    .on("click", function (d) {
        d3.select("#pays")
            .style("display", "block")
        d3.select("#map")
            .style("display", "none")
        d3.select("head title") 
            .text(d.properties.NAME)
    })  

<<<<<<< HEAD
    
  //show country name on hover over country name
    d3.selectAll("path")
    .on("mouseover", function (d) {
        d3.select(this)
            .attr("stroke", "black")
            .attr("stroke-width", 2)
        d3.select("#country-name")
            .text(d.properties.NAME)
    })
   
    
=======
//on hover over country show name
d3.selectAll("path")
    .on("mouseover", function (d) {
        d3.select("#country-name")
            .text(d.properties.NAME)
    })

>>>>>>> 47e28a1720979c8be47b585dd8f83cd5e213b8ca
