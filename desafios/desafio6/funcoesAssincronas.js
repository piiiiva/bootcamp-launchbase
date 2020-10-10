function printDouble(number, callback) {
  setTimeout(
    () => {
      const double = number * 2
      console.log(double)
      callback(double)
    },
    Math.floor(Math.random() * 180) + 1
  )
}

function printAll() {
  printDouble(5, (double) => {
    printDouble(15, (double) => {
      printDouble(12, (double) => {
        printDouble(1, (double) => {
          printDouble(89, () => {})
        })
      })
    })
  })
  // printDouble(15)
  // printDouble(22)
  // printDouble(1)
  // printDouble(89)
}

printAll()