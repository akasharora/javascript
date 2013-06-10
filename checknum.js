function CheckValue() {
    var number = document.getElementById("num");
    var result = document.getElementById("result");
    var re = /^[0-9]+$/
    if(!re.test(number.value)) {
        result.value = "false"
        alert("you have entered wrong value");
    }
    else {
        result.value = "true";
    }
}
