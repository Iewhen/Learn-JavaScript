
// function buildHouse(numberOfFloors, color) {
//   const house = `${color} ${numberOfFloors} -floors house`;

//   return house;
// }

// const smallHouse = buildHouse(2, 'red');
// const bigHouse = buildHouse(9, 'white');

// console.log(smallHouse);
// console.log(bigHouse);

// function sum(a, b = 0) {
//   console.log(a, b);

//   return a + b;
// }

// const result = sum();

// console.log(result);

// function sum(a, b, ...args){
//   console.log(a, b);
//   console.log(args);

//   //console.log(arguments);
// }
// function sum(...args){
//   console.log(args);
//   console.log(arguments);
// }

// sum(1, 2);
// sum(1, 2, 3, 4);

// function isEven(x) {
// return (x % 2) === 0;
// }

// console.log(
//   isEven(3);
// )

// const isEven = function(x) {
//   return (x % 2) === 0;
//   };

//   console.log(
//     isEven(3)
//   )

// function getCircleSquare1(r) {
//   return Math.PI * r * r;
// }

// const getCircleSquare2 = function(r) {
//   return Math.PI * r * r;
// }

// const getCircleSquare3 = (r) => {
//   return Math.PI * r * r;
// }

// const getCircleSquare4 = (r) => Math.PI * r * r;

// const getCircleSquare5 = r => Math.PI * r * r;


// const square = getCircleSquare5(1);
// console.log(square);

// let age = 25;
// // let message = (age > 18) ? 'Adult' : 'Child';
// let message = (age > 18) 
//   ? 'Adult'
//   : (age > 7) 
//     ?'Child'
//     : 'Baby';

// console.log(message);

// if(age > 18) {
//   message = 'Adult';
// } else {
//   message = 'Child';
// }
// console.log(message);

// (age > 18) 
//   ? console.log('Adult')
//   : (age > 7) 
//   ?console.log('Child')
//   : console.log('Baby');
// let a = 15;
// let b = 30;
// function getLargestExpressionResult(a, b) {
//   let r1 = (a + b);
//   let r2 = (a - b);
//   let r3 = (a / b);
//   let r4 = (a * b);

//   if ((r1 > r2) && (r1 > r3) && (r1 > r4)) {
//     return r1;
//   };
//   if ((r2 > r1) && (r2 > r3) && (r2 > r4)) {
//     return r2;
//   };
//   if ((r3 > r1) && (r3 > r2) && (r3 > r4)) {
//     return r3;
//   };
//   return r4;
// };

// console.log(getLargestExpressionResult(a ,b);)

//---------------switch case
// const count = 3;

// switch (count) {
//   case 1:
//     console.log('One');
//     break;
//   case 2:
//     console.log('Two');
//     break;

//   default:
//     console.log('Many')
// }
// const count = 3;

// switch (count) {
//   case 1:
//     console.log('One');
//     break;
//   case 2:
//     console.log('A few');
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log('A few');
//     break;

//   default:
//     console.log('Many')
// };

// const primaryColor = 'green';
// let secondaruColor = getSecondaryColor(primaryColor);

// function getSecondaryColor(primaryColor){
//   switch(primaryColor){
//     case 'red':
//       return 'magenta';

//     case 'green':
//       return 'yellow';

//     case 'blue':
//       return 'cyan';

//     default:
//       return 'white';
//   }
// }

// console.log(secondaruColor);


// const value = 5;

// switch (value) {
//   case 5:
//     console.log('A few');
//     break;

//   case 10:
//     console.log('Many');
//     break;

//   default:
//     console.log('Some');
// }

// const value = 6;

// // switch (true) {
// //   case value < 5:
// //     console.log('A few');
// //     break;
// //   case value > 10:
// //     console.log('Many');
// //     break;

// //   default:
// //     console.log('Some');
// // }

// 'use strict';

// /**
//  * @param {string} weekday
//  *
//  * @returns string
//  */

// function getTask(weekday) {
//   switch (weekday) {
//     case 'monday':
//       return 'Write a new module for the program';

//     case 'tuesday':
//       return 'Test the module and find bugs';

//     case 'wednesday':
//       return 'Write a new module for the program';

//     case 'thursday':
//       return 'Test the module and find bugs';

//     case 'saturday':
//       return 'Spend the evening with your friends';

//     case 'sunday':
//       return 'Go to the movies in the evening';

//     case 'friday':
//       return 'You need to meet the boss today';

//     default:
//       return 'Entered the wrong day of the week';

//   };
// };

// function getPaymentSystem(num){
//   switch(num){
//     case 34:
//     case 37:
//     return 'American Express';

//     case 4:
//     return 'VISA';

//     case 51:
//     case 52:
//     case 53:
//     case 54:
//     case 55:
//     return 'MasterCard';

//     case 63:
//     case 67:
//     return 'Maestro';

//     default:
//     return 'unknown payment system'
//   };
// };

// function getDirection(direction) {
//   switch (direction) {
//     case 'back':
//       return 'hor=0 ver=-1';

//     case 'forward':
//       return 'hor=0 ver=1';

//     case 'left':
//       return 'hor=-1 ver=0';

//     case 'right':
//       return 'hor=1 ver=0';

//     case 'stop':
//       return 'hor=0 ver=0';

//     default:
//       return 'hor=0 ver=0';

// -----------------LOOPS -----------------

// for (let i = 0; i < 10; i++){
//   if (i % 2 !== 0) continue;
//   // if (i % 2 === 0){
//   console.log(i);
//   console.log('Ok');
//   // }
//   // if ( i >= 3 ){
//   //   break;
//   // }
// }

// let i = 0;

// for (;; ){
//   if(i >= 3) break;

//   console.log(i);
//   console.log('Ok');

//   i++;
// }

// console.log('--- DONE ---', i);

// const count = getCount();
// const secondsInDey = 60 * 60 * 24;

// for(let i = 0; i < count; i++){
// const seconds = i * secondsInDey;

// console.log(seconds);
// }

// function getCount(){
// console.log('Counting');

//   return 10;
// }

// let n = 1203;
// let count = 0;

// // while (n % 2 === 0 ){
// //   n = n / 2;
// //   console.log(n);

// //   count++;
// // }

// do {
//   n = n / 2;
//   console.log(n);

//   count++;
// } while (n % 2 === 0 )

//console.log(count);

// function getValue() {
//   const value = Math.random();

//   if (value < 0.2) {
//     return 0;
//   }

//   return value;
// }

// // let x = getValue();

// // while (x > 0) {
// //   console.log(x);
// //   x = getValue();
// // }

// while(true){
//   let x = getValue();
//   if(x === 0){
//     break;
//   };
//   console.log(x);
// } 

// console.log('-----DONE----');

// function getDrinks(guests) {
//   let drinks = 0;
//   for (let i = 1; i <= guests;  i++) {
//     if (guests === 0) {
//       break;
//     }
//       drinks += i;
//   }
//   return drinks;
// }


// function calculateProfit(amount, period, percent) {
//   let balance = 0;
//   balance = amount;
//   while(period > 0){
//     balance += (balance * (percent / 100)) ;
//     period -= 1;
//   }
//   console.log(balance -= amount);
//   return balance -= amount;
// }

// console.log(calculateProfit(100000, 1 , 3));

// function getYears(amount, percent, expectedLimit) {
//  let years = 0;
//  while(true){
//    debugger;
//     amount += amount * (percent / 100);
//     if(amount > expectedLimit){
//       break;
//     }s
//     years += 1;
//   }
//   return years;
// }
//   console.log(getYears(1600, 10, 2000));

//------------Conversations ----------------

// const value = '100.5gh';

// console.log(Number(value), 'Number');
// console.log(+value, '*');

// console.log(parseFloat(value), 'parseFloat');
// console.log(parseInt(value, 2), 'parseInt');

// const x = 12345;

// console.log(
// String(x),
// x.toString(),
// '' + x,
// `${x}`
// );

// console.log(
//   2 === 2.0,
//   2 == 2.0
// );

// console.log(
//   2 !== '2.0',
//   2 != '2.0' 
// );

// console.log(
//   NaN === NaN,
//   NaN == NaN,
//   Object.is(NaN, NaN)
// );

// console.log(+'2' > 18); //false
// console.log(2 > +'18'); //false
// console.log('2' > '18'); //true

// console.log(2 == ' \t 2. \n ');
// console.log(1 == true);
// console.log(0 == null);
// console.log(null == undefined);


// // /**
// //  * @param input
// //  *
// //  * @returns number
// //  */

// // function decodeSignal(input) {
// //   if (!!input === true) {
// //     return 1;
// //   } else {
// //     return 0;
// //   }
// // }

// /**
//  * @param {string|number} maxSolved
//  * @param {string|number} romanSolved
//  *
//  * @returns string
//  */

// function getWinner(maxSolved, romanSolved){
//   const max = Number(maxSolved);
//   const roman = Number(romanSolved);
//   if(max === roman){
//     return 'Roman and Maxim are the winners!!!';
//   } else if (max > roman){
//     return 'Max winner!!!';
//   }else{
//     return 'Roman winner!!!';
//   }
// }


// /**
//  * @param {string} guestsInput
//  *
//  * @returns number
//  */

// function getGuestsCount(guestsInput){
//   let result = '';
//   let tryParseInput = parseFloat(guestsInput);
//   if(isNaN(tryParseInput)) {
//     result = 'not a number';
//   } else {
//   result = parseInt(guestsInput);
//   };
//   return result;
// };

// console.log(getGuestsCount('3.5'));

// ============ Logical Opertors ==========

// console.log(
//   5 || 5, //true
//   5 || 3, //true
//   3 || 5, //true
//   3 || 3,// false
// );

// function or( a, b){
//   if(a){
//     return a;
//   } else {
//     return b;
//   }
// };

// console.log(
//   true && true, //true
//   true && false, //false
//   false && true, //false
//   false && false,// false
// );

// function and( a, b){
//   if(!a){
//     return a;
//   } else {
//     return b;
//   }
// };

// console.log(
//   0 || 1 || 2 || 3 // 1
//   );

//   console.log(
//     0 && 1 && 2 && 3 //0
//     );

//     console.log(
//       0 || (1 && 2) || 3 //2
//       );

// /**
//  * @param {number} adultsCount
//  * @param {number} childrenCount
//  *
//  * @returns boolean
//  */

// function canTheyBook(adultsCount, childrenCount = 0) {
//   const maxInRoom = 8;
//   if (adultsCount && (adultsCount < maxInRoom) && (adultsCount >= (childrenCount /2))){
//     return true;
//   }
//   return false;
// }

// console.log(canTheyBook(2, 0));

// function canTheyBook(adultsCount, childrenCount = 0, babiesCount = 0) {
//   let maxInRoom = 8;
//   const adult = adultsCount;
//   const child = childrenCount;
//   const baby = babiesCount;

//   if (adult && (adult <= maxInRoom) && (child <= (adult * 2)) && (adult + child) <= maxInRoom) {
//     if (baby && (baby + adult + child) <= (maxInRoom + 1) && ((baby + child) / 2) <= adult) {
//       return true;
//       } else if (baby) {
//         return false;
//       } else return true;
//     return true;
//   }
//   return false;
// };

// console.log(canTheyBook(8,0, 1));

// function recommendRoom(adultsCount, childrenCount = 0, babiesCount = 0) {
//   const smallRoomBets = 4;
//   const bigRoomBets = 8;

//   const adult = adultsCount;
//   const child = childrenCount;
//   const baby = babiesCount;

//   if ((!baby && ((adult + child) <= smallRoomBets)) || ((baby + child + adult) <= smallRoomBets)) {
//     return 'small room';
//   }
//     else if (baby && ((adult + child + baby) <= smallRoomBets +1)){
//       return 'small room + extra bed';

//   } else if ((baby + child + adult <= bigRoomBets)){
//     return 'big room';

// }return 'big room + extra bed';
// }

// console.log(recommendRoom(3,2,0));

//------------------working with Numbers -----------------

// let x = -12.1;

// console.log(x);

// console.log('Math.floor(x)', Math.floor(x), 'целое <= x');
// console.log('Math.ceil(x)',  Math.ceil(x),  'целое >= x');
// console.log('Math.round(x)', Math.round(x), 'ближайшее целое');
// console.log('Math.trunc(x)', Math.trunc(x), 'без дробной части');

// console.log('x.toFixed(3)',  x.toFixed(3), 'строка. где 0 ко-во знаков после запятой');


// const input = ' ';

// console.log(+input);
// //  (!isNaN(input));
// //..(isFinite(input);
// if (input.trim() && isFinite(input)) {
//   console.log('OK');
// } else {
//   console.log('Error');
// }

// for (let i =0; i < 10; i++){
//   const x = Math.floor(Math.random() * 5 + 5);

//   console.log(x);
// }

// /**
//  * @param {number} year
//  *
//  * @return number
//  *
//  */

// function getCentury(year) {
//   const centry = (Math.ceil(year / 100))
//   if(centry === 0){
//     return 1;
//   }
//   return centry;
// }
// console.log(getCentury(101));

// /**
//  * @param {number} amount
//  * @param {number} exchangeRate
//  * @param {string} currencyName
//  *
//  * @returns string
//  */

// function convertCurrency(amount, exchangeRate, currencyName) {
//   let x = (amount * exchangeRate);

//   if (isFinite(amount, exchangeRate) && x
//     && amount > 0 && exchangeRate >0) {
//     x = parseFloat(x.toFixed(2));
//   } else {
//     return ('Enter valid data');
//   }
//   return `Give them ${x} ${currencyName}('s)`;
// };

// console.log(convertCurrency(0, 0.1534, 'dollar'));


// function getRectangleArea(side, diagonal) {
//   let squre = 0;
//   if(side < diagonal && side && diagonal){
//     squre = side * Math.sqrt((diagonal ** 2) - (side ** 2));
//     squre = parseFloat(squre.toFixed(2));
//   } else {
//     return 'not a rectangle.';
//   }
//   return squre;
// }

// /**
//  * @param {number} number
//  *
//  * @returns boolean
//  */

// function isEven(number) {
//   if((number % 2) === 0)
//   {
//     return true;
//   }
//   return false;
// }
// console.log(isEven(0));


// /**
//  *
//  * @param {number} fuelRemaining
//  * @param {number} distance
//  * @param {number} fuelConsumption
//  *
//  * @returns string
//  */

// function makeDecision(fuelRemaining, distance, fuelConsumption) {
//   if (distance > 0 && fuelRemaining > 0 && fuelConsumption > 0 && (((100 /fuelConsumption) * fuelRemaining) >= distance)) {
//     return 'reach gas station by themselves';
//   } else if ((distance > 0 && fuelRemaining >= 0 && fuelConsumption > 0) && (((100/fuelConsumption) * fuelRemaining) < distance))  {
//     return 'ask for help';
//   }
//   return 'please, enter the valid data.';
// }

// console.log(makeDecision(4, -1, 9));


// /**
//  * @param {number} K
//  * @param {number} N
//  *
//  * @returns number
//  */

// function countNetworking(K, N) {
//   let result = 0;
//   const month = 12;
//   result = ((month - K) / N);
//   console.log(result);
//   return Math.trunc(result);
// };

// console.log(countNetworking(3, 5));


//-----------------Working with Srtring ------------------

// const a = 'Michael';
// const b = 'John';

// const shrotest = (a.length < b.length) ? a : b;

// console.log(shrotest);
// 'use strict';

// let str = 'abcde';

// str[2] = 'Q';

// console.log(str);

// console.log(
//   str[0],
//   str.charAt(0)
// );

// console.log(
//   str[20],
//   str.charAt(20)
// );

// const word = 'Hello world';
// // for(let i = 0; i < word.length; i++){
// //   console.log(word[i]);
// // }

// // for(let i = word.length - 1; i >= 0; i--){
// //   console.log(word[i]);
// // }

// for (let letter of word) {
//   console.log(letter);
// }

// const word = 'abcdebc';
// const part = 'bc';

// console.log(
//   word.includes(part, 7), // содержитса ли строка в строку
//   word.indexOf(part, 3),  // где именно начинаетса: -1 если строка не входит
//   word.lastIndexOf(part), // тоже только поиск с конца
//   word.startsWith(part),  // строка начинаетса с парт
//   word.endsWith(part)     // стока заканчиваетса строкой
// )

// let message = 'Hello, Misha!';
// let upperMessage = message.toUpperCase();
// let lowerMessage = message.toLocaleLowerCase();

// console.log(upperMessage);
// console.log(lowerMessage);
// console.log(message);

// const model = 'Apple iPhone 11';
// const search = 'iph';

// const conditions = model.toLowerCase().includes(search.toLowerCase());

// if (conditions){
//   console.log('Found');
// };

// const message = 'Hello, world!';

// console.log(message);

// for 
// ( let i = 0; i < message.length; i++){
//   const code =  message.charCodeAt(i);
//   console.log(message[i], code, String.fromCharCode(code));
// }

// const name1 = 'Misha';
// const name2 = 'John';

// console.log(
//   name1,
//   name2,
//   name1.toLowerCase() > name2.toLowerCase(),
//   name1.localeCompare(name2) > 0// положытельний если 1 больше второго, 0 если равно, -1 если меньше

// )

// console.log(
//   name1[0],
//   name1.charCodeAt(0),
//   name2[0],
//   name2.charCodeAt(0)
// )

// const message = '0123456789';

// console.log(
//   message.substr(3,5),      //34567 c 3го 5символов
//   message.substring(3, 5),  //34 с 3го по 5 не включяя 5
//   message.slice(3, 5)       //34 так же, позволяет работять с сотрицательними
// );

// //let result = message.slice(-6, -2); // c 6го с конца по второй с конца не вкл плслле
// let result = message.slice(1, -1); // все кроме первого и последнего
// console.log(result);

// const phrase = '   First    Last   ';

// const trimmed = phrase.trim();
// const trimmedLeft = phrase.trimLeft();
// const trimmedRight = phrase.trimRight();

// console.log(`---${trimmed}---`);
// console.log(`---${trimmedLeft}---`);
// console.log(`---${trimmedRight}---`);


// const cardNumder = '2597 5269 7640 6966';

// const result = cardNumder.slice(-4);



// console.log(result.padStart(19, '**** '));
// console.log(result.padEnd(16, '*'));

// const divider = '- '.repeat(15);
// const divider1 = '\n .'.repeat(15);



// console.log(divider);
// console.log(divider1);

// const phrase = 'wwhat time is it';

// const result = phrase.replace('is', 'was');
// const result1 = phrase.replace(' ', '-');
// const result2 = phrase.replace(/ /g, '-');

// console.log(phrase);
// console.log(result);
// console.log(result1);
// console.log(result2);

// Practice--------------

// function calculateGuests(guestsInput) {
//   let guestsCount = 0;
//   for (let symbol of guestsInput) {
//     if ( isFinite(+symbol) >= 0 && symbol != ' ') {
//       for (let i = 0; i <= 9; i++) {
//         if (i === +symbol) {
//           guestsCount += +symbol;
//           guestsCount *= 10;
//         }
//       }
//     } 
//   }
//   if (guestsCount > 0) {
//   return parseFloat(guestsCount) / 10;
//   }
//   return 'not a number';
// }
// console.log(calculateGuests('14 aslkj d '));


// /**
//  * @param {string} statistic
//  *
//  * @returns number
//  */

// function getSuccessRate(statistic) {
//   const oneStudentPercent = (100 / statistic.length);
//   let rate = 0;
//   for ( let student of statistic){
//     if (student === '1'){
//       rate++;
//     }
//   }
//   if(!rate) return 0;
//   return Math.round(rate*oneStudentPercent);
// }

// console.log(getSuccessRate(''))


// 'use strict';

// function isAlphabet(letters) {
//   const lowerLetters = letters.toLowerCase().trim();
//   console.log(lowerLetters);
//   if (letters && (lowerLetters.length > 0)) {
//     for (let i = 0; i < lowerLetters.length-1; i++) {
//       console.log(lowerLetters.charCodeAt(i) + ' -- in loop for');
//       if ((lowerLetters.charCodeAt(i + 1) - (lowerLetters.charCodeAt(i))) === 1){
//       console.log(lowerLetters.charCodeAt(i + 1));
//       console.log((lowerLetters.charCodeAt(i)));
//       }else {
//       return false;
//       }
//     }
//     return true;
//   }
//   return false;
// };
// console.log(isAlphabet('abcdf'));

// /**
//  * @param {string} doc
//  *
//  * @returns string
//  */

// function removeVowels(doc) {
//   const allVowels = 'EYUIOA';
//   const result = doc.replace(/[EYUIOA]/gi, '');
//   return result;
// }
// console.log(removeVowels('Hello, world!!!'));


// 'use strict';

// /**
//  *
//  * @param {string} words
//  *
//  * @return {string}
//  */

// function makeAbbr(words) {
//   const newString = ' '+ words;
//   let resultAbbr = '';
//   let startWith = 0;
//   debugger;

//   while (newString.indexOf(' ', startWith) >= 0 ) {
//     resultAbbr += (newString[newString.indexOf(' ', startWith) + 1].toUpperCase());
//     startWith = newString.indexOf(' ', startWith) + 1;
//   }

//   return resultAbbr;
// }

// console.log(makeAbbr('na are space admi'));

'use strict';

/**
 * @param {string} message
 *
 * @returns string
 */

function decryptMessage(message) {

  let messageDecryptet = '';
}

console.log(decryptMessage('abcde'));