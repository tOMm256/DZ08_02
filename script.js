// Создайте массив из 10 элементов и удалите из него первые 3 элемента. 
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr1.splice(0, 3); // Удаляем первые 3 элемента

console.log(arr1);


// Создайте массив из 7 элементов и замените каждый элемент на строку “hello”. 
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let arr2New = arr2.fill("hello")

console.log(arr2New);


// Создайте массив из 6 элементов и отсортируйте его в обратном порядке.
let arr3 = [1, 2, 3, 4, 5, 6];
arr3.sort((a, b) => b - a);

console.log(arr3);


// Создайте массив из 4 элементов и найдите индекс элемента, который равен 3. 
let arr4 = [1, 2, 3, 4];
let index = arr4.indexOf(3);

console.log(index);


// Создайте массив из 8 элементов и удалите из него все элементы, кроме первых двух. 
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8];
arr5.splice(2);

console.log(arr5);


// Создайте массив из 9 элементов и добавьте в него элемент “world” на позицию 3. 
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr6.splice(2, 0, "world");

console.log(arr6);


// Создайте массив из 12 элементов и найдите сумму всех элементов. 
let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let sum = arr7.reduce((number1, number2) => number1 + number2, 0);

console.log(sum);


// Создайте массив из 11 элементов и найдите среднее арифметическое всех элементов. 
let arr8 = Array.from({ length: 11 }, (_, i) => i + 1);

let sum2 = arr8.reduce((number1_2, number2_2) => number1_2 + number2_2, 0);

let average = sum2 / arr8.length;

console.log(average);


// Создайте массив из 6 элементов и найдите максимальный элемент. 
let arr9 = [1, 2, 3, 4, 5, 6];
let maxElement = arr9[0];

for (let i = 1; i < arr9.length; i++) {
    if (arr9[i] > maxElement) {
        maxElement = arr9[i];
    }
}

console.log(maxElement);


// Создайте массив из 5 элементов и найдите минимальный элемент. 
let arr10 = [1, 2, 3, 4, 5];
let minElement = arr10[0];

for (let i = 1; i < arr10.length; i++) {
    if (arr10[i] < minElement) {
        minElement = arr10[i];
    }
}

console.log(minElement);


// Создайте массив из 7 элементов и найдите количество элементов, которые больше 5. 
let arr11 = [1, 2, 3, 4, 5, 6, 7];
let count = 0;

for (let i = 0; i < arr11.length; i++) {
    if (arr11[i] > 5) {
        count++;
    }
}

console.log(count);


// Создайте массив из 10 элементов и найдите количество элементов, которые меньше 10. 
let arr12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count2 = 0;

for (let i = 0; i < arr12.length; i++) {
    if (arr12[i] < 10) {
        count2++;
    }
}

console.log(count2);


// Создайте массив из 8 элементов и объедините его с другим массивом из 4 элементов. 
let arr13 = [1, 2, 3, 4, 5, 6, 7, 8]
let arr13_2 = [9, 10, 11, 12]

let arr13_3 = arr13.concat(arr13_2);
console.log(arr13_2);


// Создайте массив из 6 элементов и отфильтруйте его, оставив только элементы, которые больше 3.
let arr14 = [1, 2, 3, 4, 5, 6];
let filtered_arr14 = arr14.filter(element => element > 3);
console.log(filtered_arr14);
