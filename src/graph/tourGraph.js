import Graph from './Graph';
import { getDistance } from '../tours';

const addEdge = (cities, Graph) => {
    if (!cities.length) return;

    for (let i = 0; i < cities.length - 1; i++) {
        Graph.addEdge(
            cities[0],
            cities[i + 1],
            getDistance(cities[0], cities[i + 1])
        );
    }
    cities.shift();
    return addEdge(cities, Graph);
};

const initialiseGraph = cities => {
    const TourGraph = new Graph();
    for (let i = 0; i < cities.length; i++) {
        TourGraph.addVertex(cities[i]);
    }

    addEdge(cities, TourGraph);

    return TourGraph;
};

export default initialiseGraph;
