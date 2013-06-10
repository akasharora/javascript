function Edit(event) {
    event.parentElement.parentElement.id.cols(0).innerHTML = "";
}

function Delete(event1) {
    var row1 = event1.parentElement.parentElement;
    document.all("tab").deleteRow(row1.rowIndex);
}
var id1 = 0;
function NewRow() {
    var tid = document.getElementById("tab");
    var length = tid.rows.length;
    var row = tid.insertRow(length);
    row.setAttribute("id", id1+1);
    var column1 = row.insertCell(0);
    var element1 = document.createElement("input");
    element1.type = "textbox";
    column1.appendChild(element1);

    var column2 = row.insertCell(1);
    var element2 = document.createElement("input");
    element2.type = "textbox";
    column2.appendChild(element2);

    var column3 = row.insertCell(2);
    
    var element3 = document.createElement("a");
    var edit = document.createTextNode("Edit/");
    element3.appendChild(edit)
    element3.setAttribute("onclick","Edit(this);");

    var element4 = document.createElement("a");
    var del = document.createTextNode("Delete");
    element4.appendChild(del);
    element4.setAttribute("onclick","Delete(this);");

    column3.appendChild(element3);
    column3.appendChild(element4);

}
