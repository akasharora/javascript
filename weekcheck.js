function MaxThree() {
    var j = 0;
    var p = document.getElementById("none");
    var check = document.getElementById("form1").getElementsByTagName("input");
    if(p.checked) {
        p.checked = false;
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
    var check1 = document.getElementById("form1").getElementsByTagName("input");
    for(var i=0; i<check1.length; i++) {
        check1[i].checked = false;
    }
}
