const rows = [
  {
    username: "Andi",
    age: 20,
  },
  {
    username: "Agus",
    age: 20,
  },
  {
    username: "Bagus",
    age: 20,
  },
  {
    username: "Bobi",
    age: 20,
  },
  {
    username: "Rian",
    age: 20,
  },
]
console.log("Sebelum ditambahkan variabel add")
console.log(rows)

const add = [
  { data: "data1" },
  { data: "data2" },
  { data: "data3" },
  { data: "data4" },
  { data: "data5" },
]
for (i in rows) {
  Object.assign(rows[i], add[i])
}
console.log("Setelah ditambahkan variabel add")
console.log(rows)
