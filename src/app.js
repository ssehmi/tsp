import * as d3 from 'd3';
import getTour from './tours';
import plotCities from './ui';
import initialiseGraph from './graph/tourGraph';
import { points40, points200, points500 } from './tourCities';

const { g, x, y } = plotCities(points200);
const optimalTour = getTour(points200);

const cityGraph = initialiseGraph(points40);

console.log(cityGraph);

document.getElementById('routeButton').addEventListener('click', () => {
    document.getElementById('pathlog').innerHTML = JSON.stringify(optimalTour);

    const line = d3
        .line() // SVG line generator
        .x(function(d) {
            return x(d.x);
        })
        .y(function(d) {
            return y(d.y);
        });

    let temp = [];
    let time = 0;
    let totalTime = 0;
    for (let i = 0; i < optimalTour.length - 1; ++i) {
        temp[0] = optimalTour[i];
        temp[1] = optimalTour[i + 1];
        time = 150;

        let lineGraph = g
            .append('path')
            .attr('d', line(temp))
            .attr('stroke', 'grey')
            .attr('stroke-width', 1)
            .attr('fill', 'none');

        let totalLength = lineGraph.node().getTotalLength();

        lineGraph
            .attr('stroke-dasharray', totalLength + ' ' + totalLength)
            .attr('stroke-dashoffset', totalLength)
            .transition()
            .delay(totalTime)
            .duration(time)
            .attr('stroke-dashoffset', 0);

        totalTime += time;
    }
});
