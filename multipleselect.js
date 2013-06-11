function itemAdd(direction) {
    var left_select = document.getElementById("lselect");
    var right_select = document.getElementById("rselect");
    var temp;
    var selected = [];

    if (direction) {
        temp = right_select;
        right_select = left_select;
        left_select = temp;
    }

    for (var i in left_select.options) {
        if (left_select.options[i].selected) {
            right_select.options.add(new Option(left_select.options[i].text, left_select.options[i].value));
            selected.unshift(i);
        }
    }
    for(i in selected) {
        left_select.options.remove(selected[i]);
    }
}
