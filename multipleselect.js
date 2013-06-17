function itemAdd(value) {
    
    var left_select = document.getElementById("leftselect");
    var right_select = document.getElementById("rightselect");
    var temp;
 
    if (value) {
    temp = left_select;
    left_select = right_select;
    right_select = temp;
    }
 
    for (var count=0; count < left_select.options.length; count++) {
 
        if (left_select.options[count].selected == true) {
                var option = left_select.options[count];
                
                right_select.add(new Option(option.text, option.value));
                left_select.remove(count);
                count--;
        }
    }
}
