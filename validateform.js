function validateForm() {
    var login = document.getElementById("login");
    var email = document.getElementById("email");
    var name = document.getElementById("name");
    var homepage = document.getElementById("homepage");
    var text_area = document.getElementById("text_area");
    var checkbox = document.getElementById("check");
    var email_regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var homepage_regex = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])$/;
    var message = "";

    if(login.value == "") {
        message = "login Id can't be empty";
    } else if (!email_regex.test(email.value)) {
        message = "enter correct email";
    } else if (name.value == "") {
        message = "name field can't be empty";
    } else if (!homepage_regex.test(homepage.value)){
        message = "you have entered an invalid homepage";
    } else if (text_area.value.length < 50){
        message = "information is not complete: should be minimum 50 characters";
    }

    if (message) {
        alert(message);
        return false;
    }
}

function confirmNotification() {
    confirm("are you sure you want to receive notifications")
}
