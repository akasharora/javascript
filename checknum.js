function checkValue() {
    var number = document.getElementById("userinput");
    var result = document.getElementById("result");
    var number_regex = /^[\d+]/;
    if (!number_regex.test(number.value)) {
        result.value = "false";
        alert("you have entered wrong value");
    } else {
        result.value = "true";
    }
}
