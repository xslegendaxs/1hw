let arr = [-1, -2, 0, 4, -23, 45];   // массив

function Numbers(arr) {
    //использую команду filter() которая отфильтрует мне отрицательные числа от положительных 
    //делаю чтобы число было больше 0 
    return arr.filter(num => num > 0);
}
const positiveNumbers = Numbers(arr);
console.log(positiveNumbers);
