// Напишите стрелочную функцию JavaScript , которая проверяет, 
// является ли значение переданного аргумента строкой или нет. 
// Функция должна вернуть trueили false
// Посмотрите пример ниже, чтобы увидеть ожидаемый результат.


const isString = (x) => {let result = typeof(x)=='string' ?  true : false ; 
return result} 





console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false

