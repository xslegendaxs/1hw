let num = [68, 189, -23, 0, 4, 1000];

function sorrt(arr){
    arr.sort((a,b) => a - b);
    return arr;
}
console.log(sorrt(num));