// ! Напишіть веб-додаток для розрахунку щасливого квитка. Користувач вводить
// шестизначний номер квитка (трамвай/тролейбус). Визначте, чи дорівнює сума перших
// трьох цифр сумі останніх трьох цифр. Виведіть повідомлення про "щасливість" квитка користувачеві.



function lucky(number) {
   let result = number.toString().split("").map(Number);

  let part1 = result.slice(0, 3);
   let part2 = result.slice(3);
   let sum1 = part1.reduce(function (sum, current) {
     return sum + current;
   }, 0);
   let sum2 = part2.reduce(function (sum, current) {
     return sum + current;
  }, 0);
 }
 if (sum1 === sum2) {
   return "Your ticket is a lucky!";
 } else {
   return "You will happy in the next time!";
 }



 // ! Напишіть програму, що отримує у користувача рядок слів та повертає довжину найкоротшого



function shortestWord(string) {
   let words = string.split(" ");
  let arr = [];
  let result = 0;
  for (let i = 0; i < words.length; ++i) {
    arr = words[i];
     if (result === 0 || arr.length < result) {
      result = arr.length;
    }
  }
  return result;
 }
 console.log(shortestWord("Lets all go on holiday somewhere very cold"));




 // !У рядках ДНК символи «А» і «Т» доповнюють один одного, як «С» і «G». Напишіть програму, яка питає у користувача рядок з однією стороною ДНК - вам потрібно отримати іншу комплементарну сторону. Нитку ДНК ніколи не буває порожнім або ДНК взагалі немає.




 function revDNA(abbr) {
  let objDNA = {
    A: "T",
    T: "A",
    G: "C",
   C: "G",
   };
 let arr = [];

  for (let i = 0; i < arr.length; i++) {
   arr[i] = objDNA[arr[i]];
   arr.push(arr[i]);
 }
  let newDNA = arr.join("");
 return newDNA;
 }
