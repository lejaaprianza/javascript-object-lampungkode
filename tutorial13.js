const contoh = {
  nama: "Leja Aprianza",
  daerah: "Lampung",
}

Object.defineProperty(contoh, "place", {
  get: function () {
    return this.nama + ", " + this.daerah
  },
})

console.log(contoh.place)
