const daerah = {
  Provinsi: "Lampung",
  daftarKota: {
    kotaSatu: "Bandar Jaya",
    kotaDua: "Bandar Lampung",
    kotaTiga: "Metro",
    kotaEmpat: "Lampung Selatan",
  },
}

//seperti ini
console.log(daerah.Provinsi)

//atau ini
console.log(daerah["Provinsi"])

// atau ini
const variabelProvinsi = "Provinsi"
console.log(daerah[variabelProvinsi])

//contoh 1
console.log(daerah.daftarKota.kotaSatu)

//contoh 2
console.log(daerah.daftarKota["kotaDua"])

//contoh 3
console.log(daerah["daftarKota"]["kotaTiga"])

//contoh 4
const variabel1 = "daftarKota"
const variabel2 = "kotaEmpat"

console.log(daerah[variabel1][variabel2])
