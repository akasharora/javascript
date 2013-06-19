var checkboxes = document.getElementById("colors").getElementsByTagName("input");
var length = checkboxes.length; 

function selectCheckboxes(value) {
   for (var i = 0; i < length; i++) {
        checkboxes[i].checked = value;
    }
}
