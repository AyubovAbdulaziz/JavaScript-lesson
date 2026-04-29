// let algoritm = {
//     ism: "Algoritm IT Center",
//     yil: 2016,
//     manzil: "Chorsu, DXA binosi.",
//     telRaqam: "+998 99 111 22 33"
// }

// console.log(algoritm.ism);

// console.log(algoritm["ism"]);

// let str = "ism"
// console.log(algoritm[str]);

// let algoritm = {
//     ism: "Algoritm IT Center",
//     yil: 2016,
//     manzil: "Chorsu, DXA binosi.",
//     telRaqam: "+998 99 111 22 33"
// }

// // let start21 = Object.assign({}, algoritm)
// let start21 = structuredClone(algoritm)
// start21.ism = "Start 21"

// console.log(start21);
// console.log(algoritm);

// Link o'zgartirishni 2 ta usuli bor.

// 1. Objeck.assign()
// 2. structuredClone()


// let algoritm = {
//     ism1: "Algoritm IT Center",
//     yil1: 2016
// }

// let start21 = {
//     ism2: "Start 21",
//     yil2: 2021
// }

// let birlashgan = Object.assign(algoritm, start21)
// console.log(birlashgan);

// let obj = {
//     ism: "Eshmat",
//     yil: 2010,
//     ism: "Toshmat"
// }

// console.log(obj);

let obj = {
    ism: "Eshmat",
    yosh: 20,
    status: "Talaba",
    manzil: "Toshkent"
}

let obj1 = Object.assign({}, obj)
let obj2 = structuredClone(obj)
obj1.ism = "Toshmat"
obj1.yosh = 27
obj1.status = "Ishchi"
obj1.manzil = "Namangan"

obj2.ism = "Ali"
obj2.yosh = 17
obj2.status = "Maktab"
obj2.manzil = "Fargona"

console.log(obj1);
console.log(obj2);






