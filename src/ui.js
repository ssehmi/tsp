import * as d3 from 'd3';

export default tourCities => {
    const outerWidth = 1880;
    const outerHeight = 900; // includes margins

    const margin = { top: 100, right: 20, bottom: 80, left: 80 }; // clockwise as in CSS

    const width = outerWidth - margin.left - margin.right, // width of plot inside margins
        height = outerHeight - margin.top - margin.bottom; // height   "     "

    document.body.style.margin = '0px'; // Eliminate default margin from <body> element

    const data = tourCities;

    function xValue(d) {
        return d.x;
    } // accessors
    function yValue(d) {
        return d.y;
    }

    var x = d3
        .scaleLinear() // interpolator for X axis -- inner plot region
        .domain(d3.extent(data, xValue))
        .range([0, width]);

    var y = d3
        .scaleLinear() // interpolator for Y axis -- inner plot region
        .domain(d3.extent(data, yValue))
        .range([height, 0]); // remember, (0,0) is upper left -- this reverses "y"

    var xAxis = d3.axisBottom(x).ticks(5); // request 5 ticks on the x axis

    var yAxis = d3
        .axisLeft(y) // y Axis
        .ticks(4);

    var svg = d3
        .select('#container')
        .append('svg')
        .attr('width', outerWidth)
        .attr('height', outerHeight); // Note: ok to leave this without units, implied "px"

    var g = svg
        .append('g') // <g> element is the inner plot area (i.e., inside the margins)
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    g.append('g') // render the Y axis in the inner plot area
        .attr('class', 'y axis')
        .call(yAxis);

    g.append('g') // render the X axis in the inner plot area
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + height + ')') // axis runs along lower part of graph
        .call(xAxis);

    g.selectAll('.dot') // plot a circle at each data location
        .data(data)
        .enter()
        .append('circle')
        .attr('class', 'dot')
        .attr('cx', function(d) {
            return x(d.x);
        })
        .attr('cy', function(d) {
            return y(d.y);
        })
        .attr('r', 5);

    return {
        g,
        x,
        y
    };
};
