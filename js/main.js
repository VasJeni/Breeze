$(document).ready(function(){
   slickSettings();
   slickView();
   langToggle();
   currencyToggle();
   loginPOPupView();
   signUpPOPupView();
   headerMenuToogle();
});

function slickView() {
    $('.slick-next').html('&gt');
    $('.slick-prev').html('&lt');
    $('[id ^= slick-slide-control]').html('');
}
function slickSettings() {
    $('.b__header--slider').slick({
        dots : true,
        infinite: true,
        speed: 300,
        autoplay : true,
        fade: true,
        cssEase: 'linear',
        centerMode: true,
    });
}
function langToggle() {
    $('[class ^= b__topper--lang-]').click(function () {
        $('[class ^= b__topper--lang-]' + '.active').removeClass('active');
        $(this).addClass('active');
    });
}
function currencyToggle(){
    $('[class ^= b__topper--currency-]').click(function () {
        $('[class ^= b__topper--currency-]' + '.active').removeClass('active');
        $(this).addClass('active');
    });
}
function createLogInPOPup(){
    $('body').append("<div class='logInPOPup'></div>");
    $('.logInPOPup').append("<div class='logInPOPup--wrapper'></div>");
    $('.logInPOPup--wrapper').html('' +
        '<label for="login"login>Login</label>'+
        '<input type="text" name="login" placeholder="Login" maxlength="25" id="login">' +
        '<label for="pass">Password</label>'+
        '<input type="password" name="pass" placeholder="password"  id="pass" maxlength="25">'+
        '<button class="sendLogin">LogIn</button>'
    );
    $('.logInPOPup--wrapper').click(function (event) {
        event.stopImmediatePropagation();
    });
    $('.logInPOPup').click(function () {
        destroyPOPupLogIn();
    });
    $('.sendLogin').click(function(){
        alert('Login: ' + $('#login').val());
    })
}
function loginPOPupView(){
    $('.logIn').click(createLogInPOPup);
}
function destroyPOPupLogIn() {
    $('.logInPOPup').remove();
}
function createSignUpPOPup(){
    $('body').append("<div class='signUpPOPup'></div>");
    $('.signUpPOPup').append("<div class='signUpPOPup--wrapper'></div>");
    $('.signUpPOPup--wrapper').html('' +
        '<label for="user">User</label>'+
        '<input type="text" name="login" placeholder="Login" maxlength="25" id="user">' +
        '<label for="email">Email</label>'+
        '<input type="email" name="email" placeholder="email"  id="email" maxlength="25">'+
        '<button class="sendLogin">register</button>'
    );
    $('.signUpPOPup--wrapper').click(function (event) {
        event.stopImmediatePropagation();
    });
    $('.signUpPOPup').click(function () {
        destroyPOPupSignUp();
    });
    $('.sendLogin').click(function(){
        alert('Login: ' + $('#user').val() + ' '+ 'Email: '+  $('#email').val());
    })
}
function signUpPOPupView(){
    $('.signUp').click(createSignUpPOPup);
}
function destroyPOPupSignUp() {
    $('.signUpPOPup').remove();
}
function headerMenuToogle(){
    $('[class ^= b__header--menu] button').click(function () {
        $('[class ^= b__header--menu] button' + '.active').removeClass('active');
        $(this).addClass('active');
    });
}
