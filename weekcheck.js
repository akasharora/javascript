var checkboxes = document.getElementById("weekDays").getElementsByTagName("input");

function maxThreeSelected(clicked) {
    var count = 0;
    var check_none = document.getElementById("none");
    if (check_none.checked) {
        check_none.checked = false;
        clicked.checked = true;
    } 
    var selected = [];
    var index = 0;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            count = count + 1;
            selected[index] = checkboxes[i].value;
            index = index + 1;
        }
        
        if (count > 3) {
            var remove_index = selected.indexOf(clicked.value);
            selected.splice(remove_index, 1);
            clicked.checked = false; 
            window.alert("you can't select more than three days, you have already selected: " + selected[0] + " " + selected[1] + " " + selected[2]);
            return false;
            
            }
       }
}

function selectNone() {
    for(var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
}
