function LampungKode(daerahSaya, angkaSaya) {
  this.daerah = daerahSaya
  this.angka = angkaSaya
  this.tambah = function () {
    return this.daerah + " " + this.angka
  }
}
const namaDaerah = new LampungKode("Lampung", 50)

console.log(namaDaerah.tambah())
