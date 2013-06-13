function checkForm() {
    var email = document.getElementById("email");
    var homepage = document.getElementById("homepage");
    var email_regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    var homepage_regex = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])$/;
    var msg = "";

    if(!email_regex.test(email.value)) {
        msg = "enter correct email";
    } else if (!homepage_regex.test(homepage.value)) {
        msg = "Enter correct homepage";
    }
    if (msg != "") {
       alert(msg);
       return false;
    } else { 
        alert("form validated")
    }
}
