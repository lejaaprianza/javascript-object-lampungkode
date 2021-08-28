function LampungKode(daerahSaya, angkaSaya) {
  this.daerah = daerahSaya
  this.angka = angkaSaya
}
const namaDaerah = new LampungKode("Lampung", 50)

console.log(namaDaerah)
console.log(namaDaerah.daerah)
console.log(namaDaerah.angka)
