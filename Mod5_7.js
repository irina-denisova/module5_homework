// 7) Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

const arr = [0, null, NaN, 0, 1, 2, 4, "str"];

let odd = 0;
let even = 0;
let zero = 0;


arr.forEach(item => {
  
  if ( Number.isFinite(item) ) {
    
    if  ( item === 0) {
      zero++;
    } else if ( item % 2 === 0 ) {  
      even++; 
    } else { odd++; } 
  }

});

console.log(`Odd: ${odd}, Even: ${even}, Zero: ${zero}`);
