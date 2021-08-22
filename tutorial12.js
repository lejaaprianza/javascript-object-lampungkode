const contoh = {
  nama: "Leja Aprianza",
  daerah: "Lampung",
  kalimat: "",
  set sentence(x) {
    this.kalimat = x + this.nama + ", " + this.daerah
  },
}

contoh.sentence = "Biodata: "
console.log(contoh.kalimat)
