var ipId;
var ipPw;
var ipPw_re
var ipUserName;
var ipEmail;
var ipBirth;
var ipBirth_m;
var ipBirth_d;
var ipSex;
var ipPhone1;
var ipPhone2;
var ipPhone3;

var id;
var pw;
var pw_re;
var username;
var email;
var birth;
var birth_m;
var birth_d;
var phone1;
var phone2;
var phone3;


window.onload = function () {

    ipId = document.getElementById("id");
    ipPw = document.getElementById("pw");
    ipPw_re = document.getElementById("pw_re");
    ipUserName = document.getElementById("username");
    ipEmail = document.getElementById("email");
    ipBirth = document.getElementById("birth");
    ipBirth_m = document.getElementById("birth_m");
    ipBirth_d = document.getElementById("birth_d");
    ipSex = document.getElementById("sex");
    ipPhone1 = document.getElementById("phone1");
    ipPhone2 = document.getElementById("phone2");
    ipPhone3 = document.getElementById("phone3");

}

function check() {
    id = ipId.value;
    pw = ipPw.value;
    pw_re = ipPw_re.value;
    username = ipUserName.value;
    email = ipEmail.value;
    birth = ipBirth.value;
    birth_m = ipBirth_m.value;
    birth_d = ipBirth_d.value;
    phone1 = ipPhone1.value;
    phone2 = ipPhone2.value;
    phone3 = ipPhone3.value;

    if (pw != pw_re) {
        alert("비밀번호가 같지 않습니다");
        return false;
    }

    if (checkId() && checkPw() && checkPw_re()) {
        alert("회원가입 완료");
        // location.href = 'index.html';
    } else {
        alert("회원가입 실패");
    }
}


function checkId() {
    if (id.length >= 6 && id.length <= 12) {
        console.log("ok id");
        return true;
    } else {
        console.log("no id");
        return false;
    }
}

function checkPw() {
    if (pw.length >= 6 && pw.length <= 12) {
        console.log("ok pw");
        return true;
    } else {
        console.log("no pw");
        return false;
    }
}

function checkPw_re() {
    if (pw_re.length >= 6 && pw_re.length <= 12) {
        console.log("ok pwre");
        return true;
    } else {
        console.log("no pwre");
        return false;
    }
}


