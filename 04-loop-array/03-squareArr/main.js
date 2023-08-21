const arr = [2, 3, 5, 7, 11];
function squareArr(arr) {
    const array = [];
    arr.forEach(x=>array.push(x**2))
    return array
}