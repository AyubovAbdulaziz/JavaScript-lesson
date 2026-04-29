// let obj = {
//     ism: "Abdulaziz",
//     familiya: "Ayubov",
//     yosh: 13,
//     kurs: "Frontend"
// }

// // 1. static
// obj.ism = "Muboshsher";
// obj.familiya = "Hodjiyev";
// obj.yosh = 12;
// obj.kurs = "no'lavoy"
// console.log(obj);

// // 2. dinamic
// obj["ism"] = "Muboshsher";
// obj["familiya"] = "Hodjiyev";
// obj["yosh"] = "kecha abetda tug'ilgan";
// obj["kurs"] = "detiskiy"
// console.log(obj);

// let obj = {
//     ism: "Abdulaziz",
//     familiya: "Ayubov",
//     yosh: 13,
//     kurs: "Frontend"
// }
// for (let key in obj) {
//     console.log(key, obj[key]); 
// }

// let laptop = {
//     name: "Macbook",
//     country: "USA",
//     price: 1000
// }
// let newLaptop = {}
// for (let key in laptop) {
//     if (typeof laptop[key] === "number") {
//         newLaptop[key] = laptop[key] / 2
//     } else{
//         newLaptop[key] = laptop[key]
//     }
// }
// console.log(newLaptop);

// let laptop = {
//     name: "bodring",
//     country: "Uzbekistan",
//     price: 10,
//     count: 7
// }
// let newLaptop = {}
// for (let key in laptop) {
//     if (typeof laptop[key] === "number") {
//         newLaptop[key] = laptop[key] - 2
//     } else if (key === "chip") {
//         newLaptop[key] = "M2"
//     } else {
//         newLaptop[key] = laptop[key]
//     }
// }
// console.log(newLaptop);

let obj = {
    name: "Iphone 17 pro max",
    color: "White", 
    price: 1700,
}
let a = {}
for(let key in obj) {
    if (typeof obj[key] === "number") {
        a[key] = obj[key] + 300
    }else if (key === "name"){
        a[key] = "Iphone 18 pro max"
    }else if (key === "color"){
        a[key] = "BlueViolet"
    }else {
        a[key] = obj[key]
    }
}
console.log(a);
