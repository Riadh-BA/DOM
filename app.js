function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function control_champ(){
    var champ1 = document.form_reg.nom.value
    var champ2 = document.form_reg.prenom.value
    var champ3 = document.form_reg.age.value
    var champ4 = document.form_reg.homme.value
    var champ5 = document.form_reg.femme.value
    var champ6 = document.form_reg.user.value
    var champ7 = document.form_reg.pass.value
    var champ8 = document.form_reg.mail.value

    if (champ1==="") {
        alert("write your name please !")
    }
    if (champ2==="") {
        alert("write your prenom please !")
    }
    if (champ3==="" && isNaN(champ3)) {
        alert("write only number please !")
    }
    if (champ3 <18) {
        document.getElementById("ageverif").innerHTML="+18 only can register"
    } else {
        document.getElementById("ageverif").innerHTML="You can register"
    }
    if (champ6==="") {
        alert("write your username please !")
    }
    if (champ7==="") {
        alert("write your password please !")
    }
    if (champ7.match( /[0-9]/g) && champ7.match( /[A-Z]/g) && champ7.match(/[a-z]/g) && champ7.match( /[^a-zA-Z\d]/g) && champ7.length >= 8) {
        document.getElementById("passforc").innerHTML="Passwor strong"
    } else {
        document.getElementById("passforc").innerHTML="Passwor not strong"
    }
    if (champ8==="") {
        alert("write your adress mail please !")
    }
    if (checkEmail(champ8)) {
        document.getElementById("mailad").innerHTML="Adresse mail valid"
    } else {
        document.getElementById("mailad").innerHTML="Adresse mail not valid"
    }
    return false;
    
}

sub_button = document.querySelector('.btn_sub').addEventListener('click',control_champ)