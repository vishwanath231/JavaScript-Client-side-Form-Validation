const form = document.querySelector(".form");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const cpassword = document.querySelector(".cpassword");
const message = document.querySelector('small')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkValidation();

})

function checkValidation() {

    // trim to remove the whitespace
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    if (usernameValue == '') {
        setError(username, 'Username cannot be blank!')
    }else{
        setSuccess(username);
    }

    if (emailValue == '') {
        setError(email, 'Email cannot be blank!')
    }else if(!isEmail(emailValue)){
        setError(email, 'Not a valid email')
    }else{
        setSuccess(email);
    }

    if (passwordValue == '') {
        setError(password, 'Password cannot be blank!')
    }else{
        setSuccess(password)
    }

    if (cpasswordValue == '') {
        setError(cpassword, 'Password cannot be blank!')
    }else if(passwordValue != cpasswordValue){
        setError(cpassword, 'Password does not match!')
    }else{
        setSuccess(cpassword);

        setTimeout(() => {
            window.location.reload();
            usernameFun(usernameValue); 
        }, 1000);
    }

}

function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form__div success"
}

function setError(input,err){
   const formControl = input.parentElement;
   const msg = formControl.querySelector('small');
   formControl.className = "form__div error"
   msg.innerHTML = err;
}

function isEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function usernameFun(input){
    alert(`Hi.. ${input} 👋🏻`);
}

