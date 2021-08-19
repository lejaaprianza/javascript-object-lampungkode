const daerah = {
  namaProvinsi: "Lampung",
  namaKota: "Bandar Lampung",
  alamat: "rahasia",
  nomor: {
    angka1: 1,
    angka2: 2,
    angka3: 3,
  },
}

delete daerah.alamat

console.log(daerah)

delete daerah.nomor.angka1

console.log(daerah)
