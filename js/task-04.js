let value = document.querySelector('#value')
const buttonDecrement = document.querySelector('[data-action="decrement"]')
const buttonIncrement = document.querySelector('[data-action="increment"]')
let counterValue = 0;



buttonDecrement.addEventListener('click', () => {
    counterValue -= 1;
    return value.textContent=counterValue
});
buttonIncrement.addEventListener('click', () => {
    counterValue += 1;
    return value.textContent = counterValue
});