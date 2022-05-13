"use strict";

// console.log(date);
// //------------ get orqali malumotlarni olinadi
// console.log(date.getHours());
// //----------------getUTCHours() gmtga nisbatan farqini kursatadi
// console.log(date.getUTCHours());
// //---------------------getTimezoneOffset esa gmtga nisbatan "-" da minutda kursatadi
// console.log(date.getTimezoneOffset());

//---------------- set orqali malumot kiritamiza
// console.log(date.setHours(11));
// console.log(date);
const startDate = new Date();
console.log(startDate.getTime());

for (let i = 0; i > 100000; i++) {
  let a = 1 ** 3;
}

const endDate = new Date();
console.log(endDate.getTime());

alert(`tsikl ${endDate - startDate} millisekund ishladi`);
