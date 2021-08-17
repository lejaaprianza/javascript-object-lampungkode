const daerah = {}
daerah.provinsi1 = "Lampung"
daerah["provinsi2"] = "Jakarta"
variabelProvinsi = "provinsi3"
daerah[variabelProvinsi] = "Jawa Barat"

const add = { provinsi4: { kota: "Ambon" } }

Object.entries(add).forEach(([key, value]) => {
  daerah[key] = value
})

console.log(daerah)

// const list = ["wilayah", "daerah", "provinsi"]

// function nest(arr) {
//   for (var obj = {}, ptr = obj, i = 0, j = arr.length; i < j; i++)
//     ptr = ptr[arr[i]] = {}
//   return obj
// }

// nest(list)
// result = nest(list)
// console.log(result)
// result.wilayah.daerah.provinsi = "Lampung"
// console.log(result)
