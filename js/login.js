// console.log('js connected')

// user id and pass 
const email = 'admin';
const password = 'admin';

// first added event listener on login button
document.getElementById('login-btn').addEventListener('click', function(){
    // btn checked 
    // console.log('button clicked')
    
    // collect input field value 
    const userEmail = document.getElementById('user-email').value;
    console.log(userEmail);

    const userPassword = document.getElementById('user-password').value;
    console.log(userPassword);

    // check user email and password 
    if (userEmail === email && userPassword === password){
        console.log('login success');
        window.location.href = "bank.html"
    }
    else{
        alert('incorrect password try again!')
    }

});
