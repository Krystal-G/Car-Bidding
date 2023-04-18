const cityMap = require("./map");

const Infinity = Number.MAX_SAFE_INTEGER;

// for (let [key, value] of cityMap) {
//     console.log(key);
//     for (let [subKey, subValue] of value) {
//       console.log(`  ${subKey} : ${subValue}`);
//     }
//   }

const n = cityMap.size;
distances = new Array(n);
for (let i = 0; i < n; i++) {
    distances[i] = new Array(n).fill(Infinity);
    distances[i][i] = 0;
}
function calcDistance() { 
    // console.log(n);

    let keys = [];

    for (const [key, innerMap] of cityMap) {
        if (!keys.includes(key))
            keys.push(key);
        for (const [innerKey, dist] of innerMap) {
            if (!keys.includes(innerKey))
                keys.push(innerKey);
        }
    }
    let i = 0;
    for (const [from, toMap] of cityMap) {
        for (const [to, distance] of toMap) {
            distances[i][keys.indexOf(to)] = distance;
            // console.log(keys.indexOf(to));
        }
        i++;
    }
    // for(let i=0;i<n;i++){
    //     for(let j=0;j<n;j++) {
    //         console.log(distances[i][j]);
    //     }
    // }
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (distances[i][k] !== Infinity && distances[k][j] !== Infinity && distances[i][j] > distances[i][k] + distances[k][j]) {
                    distances[i][j] = distances[i][k] + distances[k][j];
                }
            }
        }
    }

    // Print the shortest distances between all pairs of nodes

    // for(let i=0;i<n;i++){
    //     console.log(`Distances from ${keys[i]}:`);
    //     for(let j=0;j<n;j++){
    //         if(i!=j){
    //             console.log(`${keys[j]} : ${distances[i][j]}`);
    //         }
    //     }
    //     console.log("\n");
    // }
}

module.exports = {calcDistance,distances};