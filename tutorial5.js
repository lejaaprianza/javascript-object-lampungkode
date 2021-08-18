const daerah = {}
daerah.provinsi1 = "Lampung"
daerah["provinsi2"] = "Jakarta"
variabelProvinsi = "provinsi3"
daerah[variabelProvinsi] = "Jawa Barat"

const prov = { kota: { kecamatan: {} } }

daerah.provinsi4 = prov

console.log(daerah)
