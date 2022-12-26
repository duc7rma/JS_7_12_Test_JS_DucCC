var vectors = [[1, 1, 1], [0, 1, 0], [2, 2, 2], [0, 0, 0.5]];

const findLengthOfVector = (vector) => {
    let [a, b, c] = vector;
    return Math.sqrt(a ** 2 + b ** 2 + c ** 2)
}

function findShortest(vectors) {
    let shortestVector = vectors[0];
    let lengthOfShortest = findLengthOfVector(vectors[0])

    vectors.forEach(vector => {
        let lengthOfVector = findLengthOfVector(vector)
        if (lengthOfVector < lengthOfShortest) {
            lengthOfShortest = lengthOfVector;
            shortestVector = vector
        }
    })

    return shortestVector
}

// var shortest = vectors.reduce(function (p, c) { return p.length > c.length ? c : p; }, { length: Infinity });
console.log(findShortest(vectors));
