// 6) Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.

const arr6 = [1, 2, 3, 1]

for (let i = 0; i < arr6.length; i++) {
  
  if ( arr[0] != arr6[i] ) {
    console.log('false');
    break;
  } else if ( i == arr6.length - 1 ) {
    console.log('true');
  }
}