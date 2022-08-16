const inputArea = document.querySelector("#name-input")
const titleText=document.querySelector("#name-output")
inputArea.addEventListener('input', () => {
    let currentValue = inputArea.value;
   return titleText.textContent = currentValue?currentValue:'Anonymous'; 
})
