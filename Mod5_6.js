// 6) Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.

const arr = [1, 2, 3, 1]

for (let i = 1; i < arr.length; i++) {
  
  if ( arr[0] != arr[i] ) {
    console.log('false');
    break;
    
  } else if ( i == arr.length - 1 ) {
    console.log('true');
  }
}
