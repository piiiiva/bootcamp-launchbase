function printDouble(number, callback) {
  setTimeout(
    () => {
      const double = number * 2
      console.log(double)
      callback(double)
    },
    Math.floor(Math.random() * 100) + 1
  )
}

function printAll() {
  printDouble(5, (double) => {
    printDouble(10, (double) => {
      printDouble(22, (double) => {
        printDouble(1, (double) => {
          printDouble(90, () => {})
        })
      })
    })
  })
}

printAll()