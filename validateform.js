function validateForm() {
    var login = document.getElementById("login");
    var email = document.getElementById("email");
    var name = document.getElementById("name");
    var homepage = document.getElementById("homepage");
    var textar = document.getElementById("text_area");
    var checkbox = document.getElementById("check");
    var email_regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var homepage_regex = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])$/;
    var msg = "";

    if(login.value == "") {
        msg = "login Id can't be empty";
    } else if (!email_regex.test(email.value)) {
        msg = "enter correct email";
    } else if (name.value == "") {
        msg = "name field can't be empty";
    } else if (!homepage_regex.test(homepage.value)){
        msg = "you have entered an invalid homepage";
    } else if (textar.value.length < 50){
        msg = "information is not complete: should be minimum 50 characters";
    }

    if (msg != "") {
        alert(msg);
        return false;
    } else {
        return true;
    }
}

function confirmNotification() {
    confirm("are you sure you want to receive notifications")
}
