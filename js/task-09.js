
const page = document.querySelector ('body')
const textColor=page.querySelector('.color')
function getRandomHexColor() {
   page.style.backgroundColor =`#${Math.floor(Math.random() * 16777215).toString(16)}`;
   textColor.textContent=`#${Math.floor(Math.random() * 16777215).toString(16)}`
}
const button = page.querySelector('.change-color')
button.addEventListener ('click', getRandomHexColor)
