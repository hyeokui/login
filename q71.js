// var input_id;
// var inpur_pw;

// function x() {
//     alert("아이디: " + input_id.value + "암호는: " + input_pw.value);
// }

// window.onload = function () {
//     input_id = document.getElementById("id");
//     input_pw = document.getElementById("pw");

// }

function x(){
    var input_id = document.getElementById("id");
    var input_pw = document.getElementById("pw");
    var status = document.getElementById("status");
    
    var str_id = input_id.value;
    var str_pw = input_pw.value;

    if(str_id == "cat" && str_pw == 1234){
        status.innerHTML = str_id + "님 반갑습니다."
    }else{
        alert("로그인 실패");
    }
}
