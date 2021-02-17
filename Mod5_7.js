// 7) Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

const arr7 = [2, 4, 7, 8, 10, null, 0, 5];

let odd = 0;
let even = 0;
let sumNull = 0;


arr7.forEach(function(item, index, array) {

  if ( !item ) {
    sumNull++;
  } else if ( item % 2 === 0 ) {
    even++;
  } else { 
    odd++;
  }
})

console.log(`Odd: ${odd}, Even: ${even}, Null: ${sumNull}`);