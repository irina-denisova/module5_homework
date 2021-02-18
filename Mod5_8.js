// 8) Создайте произвольный массив Map. Получите его ключи и выведите в консоль
// все значения в виде «Ключ — Х, значение — Y».

let myMap = new Map([
  [0, "zero"],
  [1, "one"],
  ["name", "Irina"],
  [true, "bool1"]
]);

for (var [key, value] of myMap) {
  console.log('Key - ' + key + ', Value - ' + value);
}
