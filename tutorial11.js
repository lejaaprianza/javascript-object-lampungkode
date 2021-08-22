const contoh = {
  nama: "Leja Aprianza",
  daerah: "Lampung",
  get place() {
    return this.nama + ", " + this.daerah
  },
}

console.log(contoh.place)
