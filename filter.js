var array = [1, 'a', 3, 'c', 'v', 'h', 'b', 2];

const filterNumbersFromArray = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (typeof arr[i] === "string") {
            arr.splice(i, 1);
        }
    }
    return arr
}

console.log(filterNumbersFromArray(array))