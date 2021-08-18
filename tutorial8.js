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

const testingData = {
  data1: "tes1",
  data2: { nestData: {} },
  data3: "tes3",
  data4: "tes4",
  data5: "tes5",
}

const hasil = []
for (i in testingData) {
  hasil.push({ [i]: testingData[i] })
}
console.log(hasil)

for (i in rows) {
  Object.assign(rows[i], hasil[i])
}

console.log(rows)
