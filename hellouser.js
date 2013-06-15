var message = document.getElementById("message");
var firstname = prompt("please enter your first name");
var name_regex = /^([\w+](\.)?(\s)?)+/i;
var display_message = "";

if (name_regex.test(firstname)) {
    var lastname = prompt("please enter your last name");
    if (name_regex.test(lastname)) {
        display_message = "hello " + firstname + " " + lastname;
        
    } else {
        display_message = "please try again and enter your last name properly";
    }
} else {
    display_message = "please try again enter your first name properly";
}
if (display_message) {
    alert(display_message)
}
message.innerHTML = display_message;

