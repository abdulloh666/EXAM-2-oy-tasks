let negatives = [];

function sumOfNegatives(y){
    let filtered = y.filter( y => y < 0);
    return filtered
}

let i = sumOfNegatives([1, -1 , 3 , -3 , -19] )
negatives.push(i)
let result = 0
let reduced = negatives.reduce((a , b) => a + b);
for (let i = 0; i < reduced.length; i++) {
    result += reduced[i]
}
console.log(`[${reduced}] natija = ${result}`);