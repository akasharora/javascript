var message = document.getElementById("hello");
var firstname = prompt("please enter your first name");
var name_regex = /^[a-z]+$/;
var msg = "";
if (name_regex.test(firstname)) {
    var lastname = prompt("please enter your last name");
    if (name_regex.test(lastname)) {
        msg = "hello " + firstname + " " + lastname;
    } else {
        msg = "please try again and enter your last name";
    }
} else {
    msg = "please enter your first name";
}
if (msg) {
    alert(msg)
    message.textContent = msg;
}

