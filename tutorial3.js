const daerah = {
  namaProvinsi: "Lampung",
  namaKota: "Bandar Lampung",
  alamat: "rahasia",
  nomor: 50,
}

//ini contoh sederhana

let txt1 = ""
for (let x in daerah) {
  txt1 += daerah[x] + " "
}
console.log("Alamat pertama: " + txt1)

//ini contoh kompleks

let txt2 = ""
let i = 0
for (let x in daerah) {
  i++
  if (i < Object.keys(daerah).length) {
    txt2 += daerah[x] + ", "
  } else {
    txt2 += "No " + daerah[x]
  }
}
console.log("Alamat kedua: " + txt2)
