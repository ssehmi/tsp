# TO RUN
```
npm instal && npm run dev
```

Navigate to the localhost url webpack tells you:
`http://localhost:9000`

You should see a graph with all the cities plotted on it.
When you click the button below it outputs the "shortest path" to be taken.
It aslo runs a simulation connecting the poins in order of cities to travel to.
The alogrithm is using closest city from the one your on then works out the next and so on.
The graph data structre is logged out if you look at the chrome developer console

# Further Work:
* Implement the nearest neighbout algorithm by traversing the Graph
* Find all Hamiltonian cycles in the graph
