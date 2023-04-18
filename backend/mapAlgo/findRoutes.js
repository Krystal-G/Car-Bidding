const cityMap = require("./map");
const {calcDistance,distances} = require("./calcDistance");
let m = new Map();
let m1 = new Map();

const n = cityMap.size;

let keys = [];

for (const [key, innerMap] of cityMap) {
    if (!keys.includes(key))
        keys.push(key);
    for (const [innerKey, dist] of innerMap) {
        if (!keys.includes(innerKey))
            keys.push(innerKey);
    }
}

function help() {
    for (let [from, _] of cityMap) {
        for (let [to, __] of cityMap) {
            if (from !== to) {
                let x = distances[keys.indexOf(from)][keys.indexOf(to)];
                if (!m.has(from)) {
                    m.set(from, []);
                }
                m.get(from).push([to, x]);
            }
        }
        m.get(from).sort((a, b) => a[1] - b[1]);
        for (let i = 0; i < m.get(from).length; i++) {
            if (!m1.has(from))
                m1.set(from, new Map());
            m1.get(from).set(m.get(from)[i][0], i);
        }
    }

    for (let [from, cities] of m) {
        console.log(`Distances from ${from}:`);
        for (let [to, distance] of cities) {
            console.log(`${to} ${distance}`);
        }
        console.log("\n\n");
    }
}

function findRoute(location) {
    let maxLoc = "";
    let maxDist = Number.MIN_SAFE_INTEGER;
    let from = "Indian Institute of Information Technology";
    for (let i = 0; i < location.length; i++) {
        let distance = m.get(from)[m1.get(from).get(location[i])][1];
        if (distance > maxDist) {
            maxDist = distance;
            maxLoc = location[i];
        }
    }
    let route = [maxLoc];
    location.splice(location.indexOf(maxLoc), 1);
    while (location.length > 0) {
        let minLoc = "";
        let minDist = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < location.length; i++) {
            let distance = m.get(route[route.length - 1])[m1.get(route[route.length - 1]).get(location[i])][1];
            if (distance < minDist) {
                minDist = distance;
                minLoc = location[i];
            }
        }
        route.push(minLoc);
        location.splice(location.indexOf(minLoc), 1);
    }
    console.log(route);
}

calcDistance();
help();

module.exports = findRoute;