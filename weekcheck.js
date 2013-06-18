var checkboxes = document.getElementById("weekDays").getElementsByTagName("input");

function maxThreeSelected(clicked) {
    var count = 0;
    var check_none = document.getElementById("none");
    if (check_none.checked) {
        check_none.checked = false;
        clicked.checked = true;
    } 
    
    var j = 0;
    var index_array = []
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            count = count + 1;
        }
        if (count > 3) {
            clicked.checked = false; 
            window.alert("you can't select more than three days");
            return false;
            }
       }
}

function selectNone() {
    for(var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
}
