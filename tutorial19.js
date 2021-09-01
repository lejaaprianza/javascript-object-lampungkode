function LampungKode(daerahSaya, angkaSaya) {
  this.daerah = daerahSaya
  this.angka = angkaSaya
}
const namaDaerah = new LampungKode("Lampung", 50)

console.log("Contoh penambahan objek yang salah")
LampungKode.tambah = "Ini data tambahan"
console.log(namaDaerah.tambah)

console.log("\nContoh penambahan objek dengan prototype yang benar")
LampungKode.prototype.tambah = "Ini data tambahan"
console.log(namaDaerah)
console.log(namaDaerah.tambah)

LampungKode.prototype.contohMethod = function () {
  return this.daerah + " " + this.angka
}

console.log(namaDaerah.contohMethod())
