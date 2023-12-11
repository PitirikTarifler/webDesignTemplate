let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

let signUpFormBtn = document.querySelector('#sign-up');
let signUpForm = document.querySelector('.sign-up-form-container');
let signUpFormClose = document.querySelector('#sign-up-form-close');

let loginFormReturn = document.querySelector('#login-return');

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');



window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    signUpForm.classList.remove('active');
}


menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

signUpFormBtn.addEventListener('click', () =>{
    signUpForm.classList.add('active');
    loginForm.classList.remove('active');
});

signUpFormClose.addEventListener('click', () =>{
    signUpForm.classList.remove('active');
});

loginFormReturn.addEventListener('click', ()=>{
    signUpForm.classList.remove('active');
    loginForm.classList.add('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

