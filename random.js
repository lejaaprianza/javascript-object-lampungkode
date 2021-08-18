const rows = [
  {
    //   id: 1,
    username: "Andi",
    age: 20,
  },
  {
    //   id: 2,
    username: "Agus",
    age: 20,
  },
  {
    //   id: 3,
    username: "Bagus",
    age: 20,
  },
  {
    //   id: 4,
    username: "Bobi",
    age: 20,
  },
  {
    //   id: 5,
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

// const hasil = [
//   { data: "data1" },
//   { data: "data2" },
//   { data: "data3" },
//   { data: "data4" },
//   { data: "data5" },
// ]
// hasil.push(testingData)

// console.log(hasil)

// console.log(testingData)
