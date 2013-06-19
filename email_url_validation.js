function validateForm() {
    var email = document.getElementById("email");
    var homepage = document.getElementById("homepage");
    var email_regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    var homepage_regex = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])$/;
    var message = "";

    if (!email_regex.test(email.value)) {
        message = "enter correct email";
    } else if (!homepage_regex.test(homepage.value)) {
        message = "Enter correct homepage";
    }
    if (message) {
        alert(message);
        return false;
    } else {
        alert("form validated");
    }
}
