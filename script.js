// Selects the button and input elements
const img = document.getElementById('img')
const changeImg = document.getElementById('change-img')
const changeTxt = document.getElementById('change-txt')
const txt = document.getElementById('txt')
const disappear = document.getElementById('disappear')
const reappear = document.getElementById('reappear')
const bgBtn = document.getElementById('bg-btn')
const body = document.getElementsByTagName('body')[0]

// Creates an event listener on the button and is listening to see if pressed, once it is, it will pop up an alert with the value of the input

// Once clicked the Change Image button, it changes the img between the first lion picture and the second lion picture
changeImg.addEventListener('click', () => {
  if (img.src == 'https://unit5-4.markcompsci.repl.co/images/lion1.jpg') {
    img.src = 'https://unit5-4.markcompsci.repl.co/images/lion2.jpg'
  } else {
    img.src = 'https://unit5-4.markcompsci.repl.co/images/lion1.jpg'
  }
})

// Once clicked, text will change
changeTxt.addEventListener('click', () => {
  if (txt.textContent === 'Some Text') {
    txt.textContent = 'Text Changed'
  } else {
    txt.textContent = 'Some Text'
  }
})

// Once clicked, text will disappear
disappear.addEventListener('click', () => {
  txt.style.display = 'none'
})

// Once clicked, text will reappear, taking up the entire block
reappear.addEventListener('click', () => {
  txt.style.display = 'block'
})

// Once clicked, background will be orange
bgBtn.addEventListener('click', () => {
  body.style.backgroundColor = 'orange'
})
