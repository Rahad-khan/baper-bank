// Creating Login Functionality
document.getElementById('login-button').addEventListener('click', function () {
    const loginInput = document.getElementById('login-mail').value;
    const loginPassword = document.getElementById('login-pass').value;
    if (loginInput == 'rahad@gmail.com' && loginPassword == '1234') {
        window.location.href = "banking.html";
    } else {
        alert('Your Email or Password is wrong, Try Again')
    }
});

//Deposit added section
