var msg = document.getElementById("hello");
var firstname = prompt("please enter your first name");
var name_regex = /^[a-z]+$/;
if (name_regex.test(firstname)) {
    var lastname = prompt("please enter your last name");
    if (name_regex.test(lastname)) {
        alert("hello " + firstname + " " + lastname);
        var output = "hello " + firstname + " " + lastname + ", how are you?";
        msg.textContent = output;
    } else {
    alert("please try again and enter your last name");
    }
} else {
    alert("please enter your first name");
}



