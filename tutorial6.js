let x = ""
const wilayah = {
  negara: "Indonesia",
  umur: 76,
  daerah: [
    {
      provinsi: "Lampung",
      kota: ["Bandar Lampung", "Metro", "Lampung Selatan"],
    },
    { provinsi: "Maluku", kota: ["Ambon", "Tual", "Maluku Tengah"] },
    { provinsi: "Jawa Barat", kota: ["Bandung", "Majalengka", "Bogor"] },
  ],
}

for (let i in wilayah.daerah) {
  x += "\n\nIni Provinsi " + wilayah.daerah[i].provinsi + "\n"
  for (let j in wilayah.daerah[i].kota) {
    x += wilayah.daerah[i].kota[j] + "\n"
  }
}

console.log(x)
