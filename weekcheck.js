var checkboxes = document.getElementById("form1").getElementsByTagName("input");

function maxThree(clicked) {
    var j = 0;
    var checknone = document.getElementById("none");
    if (checknone.checked) {
        checknone.checked = false;
        this.checked = true;
    }

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            j = j + 1;
        }

        if (j > 3) {
            clicked.checked = false; 
            window.alert("you can't select more than three days");
            return false;
            }
       }
}

function selectNone() {
    var s = document.getElementById("none")
    for(var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
}
