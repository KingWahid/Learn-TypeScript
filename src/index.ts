let namasaya: string = "Wahidan";
let username: number = 1234;
let isDead: boolean = false;

// multiu tipe data
let prestasi: number | string;
prestasi = 12;

// array biasa
let pacarsaya: string[];
pacarsaya = ["Uzwa", "Khansa"];

// tuple Array
let selingkuhan: [string, number, boolean];
selingkuhan=["Keisha", 10, true];

// tipe data custom
type TemanType = {
    isKampret: boolean;
    nama: string;
    hutang?: number;
};
let temanKita: TemanType;

temanKita = {
    isKampret: true,
    nama: "Ilham",
    hutang: 10
}

// Function
function create () : string {
    return "hahahah"
}
// Function 
const create2 = () : void => {
    let a =2;
    let b=3;
    let z=a+b;
    console.log("hahahahah"+z);
}

const add = (x: number, y: number) : void => {
    const z: number = x + y;
    console.log("haislnya adlaah: " + z)
}

const subtract = (x: number, y: number) : string => {
    return `${x} ditambah ${y} hasilnya adalah ${x+y}`
}
let result = subtract(2,10);

// union type
type Wanita = string;
type Pria = boolean;

type Gender = Wanita | Pria;

// studi kasus union type |
// intersaction type di lambangkan &
// ? bersifat opsional
type CoreCount =  2 | 4 | 8 | 16
type CoreName = "DualCore" | "QuadCore" | "OctaCore";

type Core = CoreCount | CoreName;
interface IProcessor  {
    brand: string;
    baseModel: string;
    modelname: string;
    clockSize: number;
    coreTotal: Core;
}

interface Intel extends IProcessor {
    turboBoost: boolean;
}

interface AMD extends IProcessor{
    presicionBoost?: boolean;
}

const createIntel = (processor: Intel) : void =>{
    console.log(
        `Berhasil membuat processor dengan nama ${processor.brand}
        yang mempunyai nama ${processor.baseModel} dan nama ${processor.modelname}
        yang sangat cepat cloksizenya yaitu ${processor.clockSize} sehingga dapat menghasilkan
        turoboboost ${processor.turboBoost} tota core ${processor.coreTotal}
        `
        
    )
}

const createAMD = (processor: AMD) : void =>{
    console.log(
        `Berhasil membuat processor dengan nama ${processor.brand}
        yang mempunyai nama ${processor.baseModel} dan model ${processor.modelname}
        yang sangat cepat cloksizenya yaitu ${processor.clockSize} sehingga dapat menghasilkan
        turoboboost ${processor.presicionBoost} tota core ${processor.coreTotal}
        `
        
    )
}
const CoreI5: Intel = {
    brand: "Intel",
    baseModel: "Core i5",
    clockSize: 4200,
    modelname: "i5-7900f",
    turboBoost: true,
    coreTotal: "QuadCore"
}
const ryzen3g: AMD = {
    brand: "AMD",
    baseModel: "Ryzen 3",
    clockSize: 4200,
    modelname: "Ryzen 3 3500g",
    coreTotal: 8,
    presicionBoost: true
}

createIntel(CoreI5);
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

