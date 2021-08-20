const contoh = {
  angka: 1,
  huruf: "A",
  gabungan: function () {
    return this.huruf + " " + this.angka
  },
}

console.log(contoh.gabungan())
console.log(contoh.gabungan)

//cara 1
function cobaDaerah(daerah3) {
  return (
    this.daerahSatu +
    " dan " +
    this.daerahDua +
    (daerah3 != undefined ? " dan " + daerah3 : "")
  )
}

const daerah = {
  daerahSatu: "Lampung",
  daerahDua: "Jawa Barat",
  //cara 1
  provinsi: cobaDaerah,
  //cara 2
  provinsi2: function (daerah3) {
    return (
      this.daerahSatu +
      " dan " +
      this.daerahDua +
      (daerah3 != undefined ? " dan " + daerah3 : "")
    )
  },
}

//cara 1
console.log("\nCara Satu")
console.log(daerah.provinsi())
console.log(daerah.provinsi("Bali"))

//cara 2
console.log("\nCara Dua")
console.log(daerah.provinsi2())
console.log(daerah.provinsi2("Nusa Tenggara Timur"))

//cara 3
daerah.provinsi3 = function () {
  return this.daerahSatu + " dan " + this.daerahDua
}

//cara 3
console.log("\nCara Tiga")
console.log(daerah.provinsi3())
console.log(daerah.provinsi3("Nusa Tenggara Timur"))

//saat di console.log tanpa tanda kurung ()
console.log("\nbila di console.log tanpa tanda kurung")
console.log(daerah.provinsi)
console.log(daerah.provinsi2)
console.log(daerah.provinsi3)
