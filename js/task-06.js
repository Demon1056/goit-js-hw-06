const inputArea = document.querySelector('#validation-input')

inputArea.addEventListener('blur', () =>
{
    // return console.log(Number(inputArea.value.length)+Number(inputArea.getAttribute('data-length')));
    return Number(inputArea.value.length) === Number(inputArea.getAttribute('data-length'))
        ? inputArea.classList.add('valid' )&inputArea.classList.remove('invalid')
        : inputArea.classList.add('invalid')&inputArea.classList.remove('valid')
})

