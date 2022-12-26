var arr = [
    25,
    "apple",
    25,
    ["banana", "strawberry", "apple", 25, "apple"]
];

const numberOfItems = (arr, item) => {
    let count = 0
    arr.forEach(ele => {
        ele instanceof Array && (count += numberOfItems(ele, item))
        ele === item && count++
    })
    return count
}

console.log(numberOfItems(arr, 25));
console.log(numberOfItems(arr, "apple"));
