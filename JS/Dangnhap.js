function register(event){
const usernamelogin = document.getElementById("username").value;
const passwordlogin = document.getElementById("password").value;

    event.preventDefault(); 
     const userlocal = JSON.parse(localStorage.getItem("users")) || [];
     const finduser = userlocal.find(
        (user) => 
        user.username === usernamelogin && 
        user.password === passwordlogin
    );
    if(!finduser){
        alert("tên tài khoản hoặc mật khẩu sai");
    }else{
    window.location.href ="index.html";
    }
}    
const formregister = document.getElementById("form-login");
if(formregister){
    formregister.addEventListener("submit", register);
};
$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye fa-eye-slash');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }
    });
});


