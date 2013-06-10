function MaxThree() {
    var j = 0;
    var checknone = document.getElementById("none");
    var check = document.getElementById("form1").getElementsByTagName("input");
    if(checknone.checked) {
        checknone.checked = false;
        this.checked = true;
    }

    for(var i=0; i<check.length; i++) {
        if(check[i].checked) {
            j = j+1;
        }

        if(j>3) {
            check[i].checked = false; 
            window.alert("you can't select more than three days");
            return false; 
            }
       }
}


function SelectNone() {
    var s = document.getElementById("none")
    var checkboxes = document.getElementById("form1").getElementsByTagName("input");
    for(var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
}
