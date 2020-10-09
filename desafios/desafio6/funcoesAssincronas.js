function printDouble(number) {
  setTimeout(
    () => {
      console.log(number * 2)
    },
    Math.floor(Math.random() * 180) + 1
  )
}

function printAll() {
  printDouble(5)
  printDouble(15)
  printDouble(22)
  printDouble(1)
  printDouble(89)
}

printAll()