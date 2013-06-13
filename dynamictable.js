function edit(event) {
    var length = event.parentElement.parentElement.cells.length;
    for(var i = 0; i < length - 1; i++)
        event.parentElement.parentElement.cells[i].innerHTML = "";
}

function remove(event1) {
    var row1 = event1.parentElement.parentElement;
    document.all("tab").deleteRow(row1.rowIndex);
}
var tr_id = 0;
var td_id = 1;

function edel() {
    var tid = document.getElementById("tab");
    var length = tid.rows.length;
    console.log(length)
    var row = document.getElementById("tab").getElementsByTagName("tr")
    var length = row.length;
    var column3 = row[length-1].insertCell(2);
    var element3 = document.createElement("a");
    var edit = document.createTextNode("Edit/");
    element3.appendChild(edit)
    element3.setAttribute("onclick","edit(this.id);");

    var element4 = document.createElement("a");
    var del = document.createTextNode("Delete");
    element4.appendChild(del);
    element4.setAttribute("onclick","remove(this);");

    column3.appendChild(element3);
    column3.appendChild(element4)
}

function newRow() {
    var tid = document.getElementById("tab");
    var length = tid.rows.length;
    var row = tid.insertRow(length);
    
    row.setAttribute("id", (tr_id+1));
    var column1 = row.insertCell(0);
    var element1 = document.createElement("input");
    element1.type = "textbox";
    element1.setAttribute("id",(td_id))
    column1.appendChild(element1);
    td_id = td_id + 1;
    var column2 = row.insertCell(1);
    var element2 = document.createElement("input");
    element2.type = "textbox";
    element2.setAttribute("id",(td_id))
    column2.appendChild(element2);
    td_id = td_id + 1;
    var column3 = row.insertCell(2);

    var save = document.createElement("input");
    save.type = "button"
    column3.appendChild(save);
    save.value = "save";
    save.setAttribute("id","save")
    save.setAttribute("onclick","edel(this);");
    }

