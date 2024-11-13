
function register(event){
    const username = document.getElementById("username").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const repassword = document.getElementById("repassword").value;
    event.preventDefault();
    if(password !== repassword){
        alert("nhập lại mật khẩu không đúng");
    }
    if(!validateEmail(email)){
        alert("sai định dạng email");
    }   
     const userlocal = JSON.parse(localStorage.getItem("users")) || [];
    if(
        username &&
        email &&
        password &&
        repassword &&
        password === repassword &&
        validateEmail(email)
    ){
    const user= {
        userID: Math.ceil(Math.random() * 10000),
        username: username,
        email: email,
        password: password,
    };
    userlocal.push(user);
    console.log(user);
    }

    
    localStorage.setItem("users", JSON.stringify(userlocal))
    window.location.href = "Dangnhap.html";
}    
const formregister = document.getElementById("form-register");
if(formregister){
    formregister.addEventListener("submit", register);
}
function validateEmail(email){
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
document.getElementById('eye').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
    passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});

$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye fa-eye-slash');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }
    });
});


