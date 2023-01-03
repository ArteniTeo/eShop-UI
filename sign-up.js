const username_sign_up = document.getElementById('username_sign_up');
const password_sign_up = document.getElementById('password_sign_up');
const first_name_sign_up = document.getElementById('first_name_sign_up');
const last_name_sign_up = document.getElementById('last_name_sign_up');
const sign_up_btn = document.getElementById('sign_up_btn');
const error_display_sign_up = document.getElementById('error_display_sign_up');

sign_up_btn.addEventListener('click', signIn);

function signIn() {
    if (username_sign_up.value == "" && password_sign_up.value == "") {
        error_display_sign_up.innerHTML = "please enter username and password";
    } else {
        error_display_sign_up.innerHTML = "";
        fetch(`http://127.0.0.1:8080/signup?username=${username_sign_up.value}&password=${password_sign_up.value}&first_name=${first_name_sign_up.value}&last_name=${last_name_sign_up.value}`, {
            method: 'POST',
        }).then(res => res.json()).then(data => {
            if (data.id > 0) {
                
                localStorage.setItem("loggedInUserUsername", data.username);
                localStorage.setItem("loggedInUserID", data.id);
                
                location.href='http://127.0.0.1:5500/my-account.html';
            } else {
                error_display_sign_up.innerHTML = "Signing up failed.";
            }
        });
    }
}