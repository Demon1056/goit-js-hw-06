const form = document.querySelector('.login-form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const email=form.elements.email.value;
    const password=form.elements.password.value;
const dataForm = {email,password
}
email&&password 
        ? console.log(dataForm) & event.currentTarget.reset()
        : alert('Всі поля повинні бути заповнені!')
   
})
