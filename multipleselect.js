function itemAdd(value) {
    
    var left_select = document.getElementById("leftselect");
    var right_select = document.getElementById("rightselect");
    var temp;
 
    if (value) {
        temp = left_select;
        left_select = right_select;
        right_select = temp;
    }
    while (left_select.selectedIndex.length != 0) {        //iterate until select length of selected indexes is not equal to zero
        right_select.appendChild(left_select.options[left_select.selectedIndex]);
    }
}

