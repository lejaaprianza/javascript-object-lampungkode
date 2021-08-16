const daerah = {
  Indonesia: {
    Jakarta: {
      daerah1: "Jakarta Barat",
      daerah2: "Jakarta Timur",
      daerah3: "Jakarta Utara",
    },
    Lampung: {
      daerah1: "Kabupaten Lampung Baret",
      daerah1: "Kabupaten Lampung Barat",
      daerah1: "Kabupaten Lampung Barat",
      daerah1: "Kabupaten Lampung Barat",
      daerah1: "Kabupaten Lampung Barat",
      daerah1: "Kabupaten Lampung Barat",
      daerah2: "Kabupaten Tanggamus",
      daerah3: {
        BandarLampung: {
          kecamatan1: "Way Halim",
          kecamatan2: "Teluk Betung Utara",
          kecamatan3: "Panjang",
        },
      },
    },
  },
}

// jadi array
console.log(Object.keys(daerah))
//ini jumlahnya
console.log(Object.keys(daerah).length)

console.log(Object.keys(daerah.Indonesia))
console.log(Object.keys(daerah.Indonesia).length)

console.log(Object.keys(daerah.Indonesia.Jakarta))
console.log(Object.keys(daerah.Indonesia.Jakarta).length)

console.log(Object.keys(daerah.Indonesia.Lampung))
console.log(Object.keys(daerah.Indonesia.Lampung).length)

console.log(Object.keys(daerah.Indonesia.Lampung.daerah3))
console.log(Object.keys(daerah.Indonesia.Lampung.daerah3).length)

console.log(Object.keys(daerah.Indonesia.Lampung.daerah3.BandarLampung))
console.log(Object.keys(daerah.Indonesia.Lampung.daerah3.BandarLampung).length)
