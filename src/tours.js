export const getDistance = (citya, cityb) => {
    const deltaX = Math.pow(cityb.x - citya.x, 2);
    const deltaY = Math.pow(cityb.y - citya.y, 2);

    return Math.sqrt(deltaX + deltaY);
};

const getClosestCity = (city, cities) => {
    let currentDistance = Infinity;
    let nextClosestCity = '';

    for (let i = 0; i < cities.length; i++) {
        const nextCity = cities[i];
        const distance = getDistance(city, nextCity);
        if (distance < currentDistance) {
            currentDistance = distance;
            nextClosestCity = nextCity;
        }
    }
    return nextClosestCity;
};

const removeCity = (city, arr) => {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].x === city.x && arr[i].y === city.y) {
            arr.splice(i, 1);
        }
    }
};

const getTour = cityData => {
    let [home, ...tour] = cityData;
    let route = [home];
    for (let i = 0; i < tour.length; i++) {
        let lastVisited = route[route.length - 1];
        let nextCity = getClosestCity(lastVisited, tour);
        route.push(nextCity);
        removeCity(nextCity, tour);
        i--;
    }
    return [...route, home];
};

export default getTour;
