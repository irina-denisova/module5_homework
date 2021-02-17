// 5)  Дан произвольный массив. 
// Необходимо вывести количество элементов массива, 
// затем перебрать его и вывести в консоль каждый элемент массива.

const arr5 = [1, 3, 4, 5, 7];

console.log('Summa array: ' + arr5.length);

let result = arr5.map(function(item, index, array) {

  console.log(item);

});