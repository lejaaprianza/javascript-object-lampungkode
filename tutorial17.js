function LampungKode(daerahSaya, angkaSaya) {
  this.daerah = daerahSaya
  this.angka = angkaSaya
}
const namaDaerah = new LampungKode("Lampung", 50)

namaDaerah.tambah = function () {
  return this.daerah + " " + this.angka
}

console.log(namaDaerah.tambah())
