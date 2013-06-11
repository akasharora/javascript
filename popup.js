var url = prompt("please enter url you want to open");
if (url == "") {
    alert("you have entered an empty url, please try again !!");
} else {
    var new_window = window.open(url, "new window","width = 400px,height = 450px,resizable = no,scrollbars = no,status = no,titlebar = no,toolbar = no,menubar = no");
}
