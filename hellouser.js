var msg = document.getElementById("hello");
var fname = prompt("please enter your first name");
var lname = prompt("please enter your last name");
var op="";
if(fname && lname) {
    var op = "hello " + fname + " "+lname+ ", how are you?" ;
}
else {
    op = "please try again and enter your full name";
}
msg.textContent = op;
