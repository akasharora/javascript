function SelectAll() {
    var check = document.getElementById("form1").getElementsByTagName("input");
    for(var i = 0; i < check.length; i++) {
        check[i].checked = true;
    }
}

function SelectNone() {
    var check1=document.getElementById("form1").getElementsByTagName("input");
    for(var j=0; j<check1.length; j++) {
        check1[j].checked=false;
    }
}
