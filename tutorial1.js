const daerah = {
  namaProvinsi: "Lampung",
  namaKota: "Bandar Lampung",
  angka: 50,
  isi: null,
  nodefined: undefined,
}

console.log(daerah)
console.log(daerah.namaProvinsi)
console.log(daerah.namaKota)
console.log(daerah.angka)
console.log(daerah.isi)
console.log(daerah.nodefined)
daerah.angka = 1
console.log(daerah.angka)
daerah.dataBaru = "ini data baru"
console.log(daerah)

// const daerah = new Object()
// daerah.namaProvinsi = "Lampung"
// daerah.namaKota = "Bandar Lampung"
// daerah.angka = 50
// daerah.isi = null
// daerah.nodefined = undefined

// console.log(daerah)
