// DOM Elements
const formBox = document.querySelector('.form__box')
const form = document.querySelector(".form");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const cpassword = document.querySelector(".cpassword");
const message = document.querySelector('small');

const successContianer = document.querySelector('.success__container');
const nameOutput = document.querySelector('.nameOutput');
const returnHome = document.querySelector(".returneHome")
const heartRain = document.querySelector(".heart_rain")




// Form submit event
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

    // check valid username
    if (usernameValue == '') {
        setError(username, 'Username cannot be blank!')
    }else{
        setSuccess(username);
    }

    // check valid email
    if (emailValue == '') {
        setError(email, 'Email cannot be blank!')
    }else if(!isEmail(emailValue)){
        setError(email, 'Not a valid email')
    }else{
        setSuccess(email);
    }

    // check valid password
    if (passwordValue == '') {
        setError(password, 'Password cannot be blank!')
    }else{
        setSuccess(password)
    }

    // check valid confirm password
    if (cpasswordValue == '') {
        setError(cpassword, 'Password cannot be blank!')
    }else if(passwordValue != cpasswordValue){
        setError(cpassword, 'Password does not match!')
    }else{
        setSuccess(cpassword);
        correctOuput();
    }
    
}

// Set success msg
function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form__div success"
}

// Set error msg
function setError(input,err){
   const formControl = input.parentElement;
   const msg = formControl.querySelector('small');
   formControl.className = "form__div error"
   msg.innerHTML = err;
}


// Check valid email expression
function isEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}






// all form field correct this function execute
function correctOuput(){
    setInterval(() => {
        formBox.classList.add('active');
        successContianer.classList.add('active');
        nameOutput.innerHTML = `Hi.. ${username.value} 👋🏻`;
    }, 1000);
    setInterval(createHeart,300);
}



// Home button event
returnHome.addEventListener('click', () => {
    homePage();
})



// when click home button window was reload retune to the form page
function homePage(){
    window.location.reload();
    // formBox.classList.remove('active');
    // successContianer.classList.remove('active')
}


// Registration Successful the heart rain fall...
function createHeart(){
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = "🎉";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"
    heartRain.appendChild(heart);
}
