var checkboxes = document.getElementById("colors").getElementsByTagName("input");

function selectCheckboxes(value) {
    for (var i = 0; i < checkboxes.length; i++) {
        if (value) {
            checkboxes[i].checked = true;
        } else { 
            checkboxes[i].checked = false;
        }
    }
}
