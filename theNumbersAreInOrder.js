let num = [68, 189, -23, 0, 4, 1000]; //массив

function sorrt(arr){
    //использую метод sort() делая из элементов строку и сортерую их по возростанию используя функцию сравнения  ( a - b )
    arr.sort((a,b) => a - b);
    return arr;
}
console.log(sorrt(num));