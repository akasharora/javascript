var firstname = prompt("please enter your first name");
var name_regex = /^([\w+](\.)?(\s)?)+/i;
var display_message = "";
if (firstname == null) {
    display_message = "please enter your first name properly";            //nested if else
} else if (name_regex.test(firstname)) {
    var lastname = prompt("please enter your last name");
    if (lastname == null) {
        display_message = "please enter your last name name properly"
    } else if (name_regex.test(lastname)) {
        display_message = "hello " + firstname + " " + lastname;
    } else {
        display_message = "please try again and enter your last name properly";
    }
} else {
    display_message = "please try again enter your first name properly";
}
if (display_message) {
    alert(display_message);
}
document.write(display_message);
