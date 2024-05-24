"use strict";
let namasaya = "Wahidan";
let username = 1234;
let isDead = false;
// multiu tipe data
let prestasi;
prestasi = 12;
// array biasa
let pacarsaya;
pacarsaya = ["Uzwa", "Khansa"];
// tuple Array
let selingkuhan;
selingkuhan = ["Keisha", 10, true];
let temanKita;
temanKita = {
    isKampret: true,
    nama: "Ilham",
    hutang: 10
};
// Function
function create() {
    return "hahahah";
}
// Function 
const create2 = () => {
    let a = 2;
    let b = 3;
    let z = a + b;
    console.log("hahahahah" + z);
};
const add = (x, y) => {
    const z = x + y;
    console.log("haislnya adlaah: " + z);
};
const subtract = (x, y) => {
    return `${x} ditambah ${y} hasilnya adalah ${x + y}`;
};
let result = subtract(2, 10);
const createIntel = (processor) => {
    console.log(`Berhasil membuat processor dengan nama ${processor.brand}
        yang mempunyai nama ${processor.baseModel} dan nama ${processor.modelname}
        yang sangat cepat cloksizenya yaitu ${processor.clockSize} sehingga dapat menghasilkan
        turoboboost ${processor.turboBoost}
        `);
};
const createAMD = (processor) => {
    console.log(`Berhasil membuat processor dengan nama ${processor.brand}
        yang mempunyai nama ${processor.baseModel} dan model ${processor.modelname}
        yang sangat cepat cloksizenya yaitu ${processor.clockSize} sehingga dapat menghasilkan
        turoboboost ${processor.presicionBoost}
        `);
};
const intelCoreI5 = {
    brand: "Intel",
    baseModel: "Core i5",
    clockSize: 4200,
    modelname: "i5-7900f",
    turboBoost: true
};
const ryzen3g = {
    brand: "AMD",
    baseModel: "Ryzen 3",
    clockSize: 4200,
    modelname: "Ryzen 3 3500g",
    presicionBoost: true
};
createIntel(intelCoreI5);
createAMD(ryzen3g);
// console.log({namasaya});
// console.log({username});
// console.log({isDead});
// console.log({prestasi});
// console.log({pacarsaya});
// console.log({selingkuhan});
// console.log({temanKita});;
// console.log(create());
// create2();
// add(10, 2);
// console.log(result);
