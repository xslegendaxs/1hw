let arr = [-1, -2, 0, 4, -23, 45];

function Numbers(arr) {
    return arr.filter(num => num > 0);
}
const positiveNumbers = Numbers(arr);
console.log(positiveNumbers);
