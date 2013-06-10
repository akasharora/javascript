function ItemAdd(direction) {
    var lsel = document.getElementById("lselect");
    var rsel = document.getElementById("rselect");
    var temp;
    var selected = [];

    if (direction) {
        temp = rsel;
        rsel = lsel;
        lsel = temp;
    }

    for(var i in lsel.options) {
        if(lsel.options[i].selected) {
            rsel.options.add(new Option(lsel.options[i].text, lsel.options[i].value));
            selected.unshift(i);
        }
    }
    for(i in selected) {
        lsel.options.remove(selected[i]);
    }
}

