// If - Nested If
let nilai = 81;

if (nilai >= 90) {
    console.log("maka akan mendapat nilai A");
} else if (nilai >= 80) {
    console.log("maka akan mendapat nilai B");
} else if (nilai >= 70) {
    console.log("maka akan mendapat nilai C");
} else if (nilai >= 60) {
    console.log("maka akan mendapat nilai D");
} else {
    console.log("maka akan mendapat nilai F");
}

// Switch Case
let Supercar = 3;
let Brand;

switch (Supercar) {
    case 1:
        Brand = "Aston Martin";
        break;
    case 2:
        Brand = "Bugatti";
        break;
    case 3:
        Brand = "Faraday Future";
        break;
    case 4:
        Brand = "Ferrari";
        break;
    case 5:
        Brand = "Formula E";
        break;
    case 6:
        Brand = "Koenigsegg";
        break;
    case 7:
        Brand = "Lamborghini";
        break;
    case 8 :
        Brand = "Pagani";
        break; 
    case 9 :
        Brand = "SSC";
        break;
    case 10 :
        Brand = "Tushek Supercars"
        break;              
    default:
        Brand = "Invalid Brand";
        break;
}

console.log("My supercar is " + Brand);

// For Statement
let BrandCars = ["Bugatti", "Faraday Future", "Ferrari", "Formula E", "Koenigsegg", "Lamborghini", "Pagani", "SSC", "Tushek Supercars"];

for (let i = 0; i < BrandCars.length; i++) {
    console.log(BrandCars[i]);
}

// While
let count = 1;

while (count <= 6) {
    console.log("Count: " + count);
    count++;
}

//Do While
let num = 6;

do {
    console.log("Number: " + num);
    num++;
} while (num <= 5);

// Function
//Basic Funtion
function greet(nama) {
    console.log("Hello, kak " + nama + "!");
}

greet("Alexander Kenzy Pinaring Gusti");

//Function with Return Values
function add(a, b) {
    return a + b;
}

let sum = add(15, 25);
console.log("Sum: " + sum)

//Anonymous Function(Expression Function)
//Menghiting Luas Segitiga
const Perkalian = function(a, b) {
    return a * b;
};

let product = Perkalian(4, 6);
console.log("Hasil = " + product);

//Arrow Function
//Menghitung Volume Balok
let panjang = 10; // Misalnya, panjang dalam satuan sentimeter
let lebar = 7;    // Misalnya, lebar dalam satuan sentimeter
let tinggi = 15;   // Misalnya, tinggi dalam satuan sentimeter

// Menghitung volume balok
let volume = panjang * lebar * tinggi;

// Menampilkan hasil volume ke konsol
console.log("Volume balok adalah: " + volume + " cm³");
