function LampungKode(daerahSaya, angkaSaya) {
  this.daerah = daerahSaya
  this.angka = angkaSaya
}
const namaDaerah = new LampungKode("Lampung", 50)
LampungKode.tambah = "Ini data tambahan"

console.log("akses fungsi")
console.log(LampungKode.tambah)
console.log("\nContoh penambahan objek yang salah")
console.log(namaDaerah.tambah)

console.log("\nContoh penambahan objek yang benar")
namaDaerah.tambah = "Ini data tambahan"
console.log(namaDaerah)
console.log(namaDaerah.tambah)
