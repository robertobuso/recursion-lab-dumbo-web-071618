printCharacters = (string) => {
  if (string.length < 1) {
    return true
  } else {
  console.log(string.charAt(0))
  printCharacters(string.substring(1))
  }
}

const newArr = []

reverseString = (string) => {
  newArr.push(string[string.length-1])
  if (string.length > 1) {
    reverseString(string.substr(0, string.length - 1))
  }
   return newArr.join('')
}
