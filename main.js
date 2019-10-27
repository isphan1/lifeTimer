tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");

tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex,colorCode){
    
    tabButtons.forEach(node => {
        node.style.backgroundColor = "";
        node.style.color = "";
    });

    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color='white';

    tabPanels.forEach(node => {
        node.style.display='none';
    });


    tabPanels[panelIndex].style.display='block';
    tabPanels[panelIndex].style.backgroundColor=colorCode;

}

showPanel(0,'orange')

$('.username_error').hide()
$('.password_error').hide()
$('.re_password_error').hide()
$('.email_error').hide()


var user = $('#username').val();


var username = $('#username');
var password = $('#password');
var re_password = $('#re_password');
var email = $('#email');


var a=false;
var b=false;
var c=false;
var d=false;


username.on('keyup',function(){
     (function (){
        var username = $('#username').val().length;
    
        if(username <5 || username >20){
            $('.username_error').html('Username more then 5 letters and less then 20 letters.');
            $('.username_error').show()
            a=true
        }
        else{
            $('.username_error').hide()
            
            a=false;
    
        }
    })();
})

password.on('keyup',function(){
    check_password();
})

re_password.on('keyup',function(){
    check_re_password();
})

email.on('keyup',function(){
    check_email();
})





function check_password(){
    var password = $('#password').val().length;

    if(password <7 || password >20){
        $('.password_error').html('At least seven digit');
        $('.password_error').show()
        b=true
    }
    else{
        $('.password_error').hide()

 b=false;

    }
}


function check_re_password(){
    var password = $('#password').val();
    var re_password = $('#re_password').val();

    if(password != re_password || password == 0){
        $('.re_password_error').html('Password conformation dose not match.');
        $('.re_password_error').show()
        c=true
    }
    else{
        $('.re_password_error').hide();

    c=false;
    }
}

function check_email(){
    var pattern = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

    if(pattern.test($('#email').val())){
        $('.email_error').hide()

 d=false;
    }
    else{
        $('.email_error').html('Invalid email');
        $('.email_error').show()
        d=true
    }
}



$('#reg_form').submit(function(e){

    e.preventDefault();

check_username();
check_password();
check_re_password();
check_email();

if(a == false && b==false&&c==false&&d==false){
    console.log(user)
    return true
}
else{

    return false;

}
});


localStorage.setItem('name','aziz')

console.log(localStorage.getItem('name'))

sessionStorage.setItem('age',25)

console.log(sessionStorage.getItem('age'))

document.cookie =`profession = student;`