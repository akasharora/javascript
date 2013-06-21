var error_message = "please try again and enter your name properly"
try {
    var first_name = prompt("please enter your first name");
    if(!first_name) {
        throw error_message;
    } else {
        var last_name = prompt("please enter your last name")
    }
    if (!last_name) {
        throw error_message;
    }
} catch(error) {
    alert(error )
}
var display_message = "";
var name_regex = /^([\w+](\.)?(\s)?)+/i;

if (name_regex.test(first_name) && name_regex.test(last_name)) {
    display_message = "hello " + first_name + " " + last_name;
}
if (first_name && last_name) {
    alert(display_message);
    document.write(display_message);
}
