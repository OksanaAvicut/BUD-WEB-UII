//TODO

const randomNouns = ["Упевненість у собі", "Гідність", "Скромність", "Сила волі"];
const randomVerbs = ["впливає", "народжує", "створює"];
const randomWords = ["віру", "прогрес", "радість", "силу"];
const randomNoun = randomNouns[Math.floor(Math.random() * 4)];
const randomVerb = randomVerbs[Math.floor(Math.random() * 3)];
const randomWord = randomWords[Math.floor(Math.random() * 4)];
const randomInsult =
  "Твоя " + randomNoun + " " + randomVerb + " " + randomWord + "!!!";
console.log(randomInsult);

//First List

const randomBodyParts = ["шия", "ніс", "очі"];
const randomAdjectives = ["крива", "горбатий", "опухлі"];
const randomAnimalParts = ["вухо", "клешня", "голова"];
const randomAnimals = ["рака", "крокодила", "курки", "свині", "корови"];
const randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
const randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
const randomAnimalPart = randomAnimalParts[Math.floor(Math.random() * 3)];
const randomAnimal = randomAnimals[Math.floor(Math.random() * 5)];
const randomResult =
  "У тебe " +
  randomBodyPart +
  " ще більш " +
  randomAdjective +
  ", ніж " +
  randomAnimalPart +
  " у " +
  randomAnimal +
  "!";
console.log(randomResult);

//operador + or join?

const randomNs = ["Упевненість у собі", "Гідність", "Скромність", "Сила волі"];
const randomVs = ["впливає", "народжує", "створює"];
const randomWs = ["віру", "прогрес", "радість", "силу"];
const randomN = randomNs[Math.floor(Math.random() * 4)];
const randomV = randomVs[Math.floor(Math.random() * 3)];
const randomW = randomWs[Math.floor(Math.random() * 5)];
const randomIns = ["Твоя", randomN, randomV, randomW, "!!!"];
console.log(randomIns.join(" "));

//Join numbers

let numbers = [3, 2, 1];
let text = numbers.join(" більше, ніж ");
console.log(text);

//count scores

const scores = {
  Kolian: 0,
  Vasian: 0,
  Tolian: 0,
};

scores["Kolian"] += 1;
scores["Vasian"] += 1;
scores["Tolian"] += 1;
console.log(scores);

//Углиб об'єктів і масивів

const myCrazyObject = {
  name: "Безглуздий об'єкт",
  "some array": [7, 9, { purpose: "плутанина", number: 123 }, 3.3],
  "random animal": "Бананова акула",
};

console.log(myCrazyObject["some array"][2].number);
