const contoh = {
  nama: "Leja Aprianza",
  daerah: "Lampung",
  kalimat: "",
}

Object.defineProperty(contoh, "sentence", {
  set: function (x) {
    this.kalimat = x + this.nama + ", " + this.daerah
  },
})

contoh.sentence = "Biodata: "
console.log(contoh.kalimat)
