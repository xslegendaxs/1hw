const arr1 = [1, 2, 3]; //1 массив
const arr2 = [4, 5, 6]; //2 массив
const comparison = arr(arr1, arr2);

function arr(arr1, arr2) {
    //просматриваю масивы как строку,если есть одинаковые сивмволы выдаю true
    //если таких сивмволов нет выдаю false
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
