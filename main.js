const numbers = document.getElementsByClassName("numbers")
const ops = document.getElementsByClassName("operators")
const clear = document.querySelector('.clearbutton')
const equals = document.querySelector(".equals")
const displayBox = document.querySelector("p")

let operator = ""
let firstNumber = 0
let secondNumber = 0
results = 0

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function click() {
    displayBox.innerHTML += numbers[i].textContent
  })
}

for (let i = 0; i < ops.length; i++) {
  ops[i].addEventListener("click", function click() {
    operator = ops[i].textContent
    firstNumber = parseFloat(displayBox.textContent)
    displayBox.textContent = ""
  })
}

clear.addEventListener("click", function click() {
  displayBox.innerHTML = ""
})

equals.addEventListener("click", function equal() {
  secondNumber = parseFloat(displayBox.textContent)
  displayBox.innerHTML = ""
  if (operator === "+") {
    results = firstNumber + secondNumber
  } else if (operator === "-") {
    results = firstNumber - secondNumber
  } else if (operator === "*") {
    results = firstNumber * secondNumber
  } else if (operator === "/") {
    results = firstNumber / secondNumber
  } else {
    displayBox.innerHTML = "Error"
  }
  displayBox.innerHTML = results
})
