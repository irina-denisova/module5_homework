// 1) Напишите программу, которая работала бы следующим образом: в prompt вводится значение. 
// С помощью унарного плюса (арифметический оператор) 
// необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.

let num = +prompt('Enter a number:', '');

if ( isFinite(num) ) {
  let result = ( number % 2 == 0) ? 'even':'odd';
  console.log(`Number is ${result}`);
} else {
  console.log('Oops, it is not number.');
}