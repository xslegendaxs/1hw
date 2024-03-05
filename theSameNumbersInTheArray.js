const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const comparison = arr(arr1, arr2);

function arr(arr1, arr2) {
    const num1 = arr1.join('');
    const num2 = arr2.join('');
    for (let i of num1) {
        if (num2.includes(i)) {
            return true;
        }
    }
    return false;
}
console.log(comparison);
