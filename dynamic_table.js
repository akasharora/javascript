var tr_id = 0;
var td_id = 50;

function row_index(clicked) {
    while ((clicked = clicked.parentElement) && clicked.nodeName.toLowerCase() != "tr") {
    }
    return clicked.rowIndex;
}

function remove(clickedRow) {
    var rowindex = row_index(clickedRow);
    document.getElementById("data_table").deleteRow(rowindex);
}

function newRowAndEdit(clicked, operation, string) {             //this function performs both operations adds new row as well as edits row
    var rowindex;
    var row;

    if (operation == "edit") {
        rowindex = row_index(clicked);
    } else {
        var table_id = document.getElementById("data_table");
        rowindex = table_id.rows.length;
        row = table_id.insertRow(rowindex);
    }
    
    if (operation == "edit") {
        row = document.getElementById("data_table").rows[rowindex]
    }
    var cell = [];
    var element = [];
    for (var i = 0; i < 2; i++) {
        if (operation == "edit") {
            row.deleteCell(i);
        }  
        cell[i] = row.insertCell(i);
        element[i] = document.createElement("input");
        element[i].type = "textbox";
        element[i].setAttribute("id", (++td_id));
        if (operation == "edit") {
            element[i].setAttribute("value",string[i])
        }
        cell[i].appendChild(element[i]);
    }
    
    if (operation == "edit") {
        row.deleteCell(2);
    }

    var cell_3 = row.insertCell(2);
    var save = document.createElement("input");
    save.type = "button"
    cell_3.appendChild(save);
    save.value = "save";
    save.setAttribute("id",(++td_id));
    save.setAttribute("onclick","onSaveClick(this);");
}

function onSaveClick(clicked) {
    var rowindex = row_index(clicked);
    var row_1 = document.getElementById("data_table").rows[rowindex];
    row_1.deleteCell(2);
    var cell = row_1.getElementsByTagName("input");
    var string = []
    for (var i = 0; i < cell.length; i++) {
        string[i] = cell[i].value;
    }
    save(row_1,string,0);
    save(row_1,string,1);

    var column_3 = row_1.insertCell(2);
    var element_3 = document.createElement("a");
    var edit_row = document.createTextNode("Edit/");
    element_3.appendChild(edit_row);
    element_3.onclick =  (function(){newRowAndEdit(this, 'edit', string)});

    var element_4 = document.createElement("a");
    var row_delete = document.createTextNode("Delete");
    element_4.appendChild(row_delete);
    element_4.onclick = (function(){remove(this)});
    
    column_3.appendChild(element_3);
    column_3.appendChild(element_4);
    
}
function save(row,string,index) {
    row.deleteCell(index);
    var column = row.insertCell(index);
    var cell = document.createElement("p");
    var cellData = document.createTextNode(string[index])
    cell.appendChild(cellData);
    column.appendChild(cell);
}
