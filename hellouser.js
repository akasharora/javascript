var message = document.getElementById("hello");
var firstname = prompt("please enter your first name");
var name_regex = /^([\w+](\.)?(\s)?)*[\w+]?$/i;
var msg = "";
var screen_message = ""
if (name_regex.test(firstname)) {
    var lastname = prompt("please enter your last name");
    if (name_regex.test(lastname)) {
        msg = "hello " + firstname + " " + lastname;
        
    } else {
        msg = "please try again and enter your last name properly";
    }
} else {
    msg = "please try again enter your first name properly";
}
if (msg) {
    alert(msg)
}
message.innerHTML = msg;

