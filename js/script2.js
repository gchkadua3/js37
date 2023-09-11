const form = document.getElementById('myForm');

form.addEventListener('submit', e => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const usernamePattern = /^[a-zA-Z0-9_]{3,16}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;




    if (usernamePattern.test(username)) {
        usernameInput.style.border = '1px solid green';
        console.log(password);
    } else {
        usernameInput.style.border = '1px solid red';
        window.alert('username should contain only letters (both uppercase and lowercase), numbers, and underscores, and has a length between 3 and 16 characters.')
    };

    if (passwordPattern.test(password)) {
        passwordInput.style.border = '1px solid green';
       
    } else {
        passwordInput.style.border = '1px solid red';
        window.alert('Password should contain at least 1 alphabetical character, 1 numeric digit, and 1 special character and should be at least 8 characters long');
        console.log(password);
    }


    if(usernamePattern.test(username) && passwordPattern.test(password)) {
        window.location.href = 'home.html';
    } else {
        
    }
});
