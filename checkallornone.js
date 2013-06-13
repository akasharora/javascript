var checkboxes = document.getElementById("form1").getElementsByTagName("input");

function selectCheckbox(value) {
    for (var i = 0; i < checkboxes.length; i++) {
        if (value) {
            checkboxes[i].checked = true;
        } else { 
            checkboxes[i].checked = false;
        }
    }
}
