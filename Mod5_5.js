// 5)  Дан произвольный массив. 
// Необходимо вывести количество элементов массива, 
// затем перебрать его и вывести в консоль каждый элемент массива.

const arr = [1, 3, 4, 5, 7];


console.log('Length array: ' + arr.length);


let result = arr.map( item => {

  console.log(item);

});

console.log(arr.join(' '));
