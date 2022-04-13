import * as d3 from 'd3';

//append text to body
d3.select("section.pays")
     .append("p")
     .text("Hello world")

//change title in head
d3.select("head title")
    .text("Pays")
    