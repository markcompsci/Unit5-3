// Selects the button and input elements
const btn = document.getElementById('btn')
const input = document.getElementById('input')

// Creates an event listener on the button and is listening to see if pressed, once it is, it will pop up an alert with the value of the input
btn.addEventListener('click', () => {
  alert(input.value)
})
