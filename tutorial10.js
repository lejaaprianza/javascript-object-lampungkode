//contoh 1
const biodataSaya = {
  nama: "Leja Aprianza",
  usia: 17,
  asal: "Lampung",
}

console.log("Ini contoh satu")
const biodataArray = Object.values(biodataSaya)
console.log(biodataArray)

//contoh 2
const biodataSaya2 = {
  orang1: { nama: "Leja Aprianza", usia: 17, asal: "Lampung" },
  orang2: { nama: "Zulaika", usia: 17, asal: "Jawa Barat" },
}

console.log("\nIni contoh dua")
const biodataArray2 = Object.values(biodataSaya2)
console.log(biodataArray2)
