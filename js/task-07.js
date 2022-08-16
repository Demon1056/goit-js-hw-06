const sizeControl = document.querySelector('#font-size-control')
const text = document.querySelector('#text')
console.log(text);
sizeControl.addEventListener('input', (event) => {
    return text.style.fontSize=`${event.currentTarget.value}px` ;
    
})