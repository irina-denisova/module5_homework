// 2) Дана переменная Х, которая может принимать любое значение.
// Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».
// Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».

let x = prompt('enter x:', '');

let result = typeof x;

switch (result) {
  case 'number':
      console.log('Type of x is number');
      break;
  case 'string':
      console.log('Type of x is string');
      break;
  case 'boolean':
      console.log('Type of x is boolean');
      break;
  default:
      console.log('Type of x is not defined');
}

