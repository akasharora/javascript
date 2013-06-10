function CheckForm1() {
    var login = document.getElementById("login");
    var mail = document.getElementById("email");
    var name = document.getElementById("name1");
    var home = document.getElementById("home2");
    var textar = document.getElementById("tarea");
    var chbox = document.getElementById("check");
    var reemail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var home1 = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])$/;
    var msg = "";

    if(login.value == "") {
        msg = "login Id can't be empty";
    } else if(!reemail.test(mail.value)) {
        msg = "enter correct email";
    } else if(name.value == "") {
        msg = "name field can't be empty";
    } else if(!home1.test(home.value)){
        msg = "you have entered an invalid homepage";
    } else if(textar.value.length < 50){
        msg = "information is not complete";
    }

    if(chbox.checked) {
        confirm ("are you sure you want to receive notifications?");
    }

    if(msg!="") {
    msg = "" + msg;
    }

    else {
        msg="form validated";
    }

    alert(msg);
    preventDefault();
}
