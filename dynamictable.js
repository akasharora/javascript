var tr_id = 0;
var td_id = 50;

function row_index(clicked) {
    var row_index;
    while ((clicked = clicked.parentElement) && clicked.nodeName.toLowerCase() != "tr") {
    }
    row_index = clicked.rowIndex;
    return row_index;
}

function remove(clickedRow) {
    var rowindex = row_index(clickedRow);
    document.getElementById("data_table").deleteRow(rowindex);
}

function newRowAndEdit(clicked, operation) {
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
        row.deleteCell(0); 
    }

    var cell_1 = row.insertCell(0);
    var element_1 = document.createElement("input");
    element_1.type = "textbox";
    element_1.setAttribute("id", (++td_id));
    cell_1.appendChild(element_1);
     
    if (operation == "edit") {
        row.deleteCell(1);
    }

    var cell_2 = row.insertCell(1);
    var element_2 = document.createElement("input");
    element_2.type = "textbox";
    element_2.setAttribute("id",(++td_id));
    cell_2.appendChild(element_2);
    
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
    var row1 = document.getElementById("data_table").rows[rowindex];
    row1.deleteCell(2);
    var cell = row1.getElementsByTagName("input");
    var string = []
    for (var i = 0; i < cell.length; i++) {
        string[i] = cell[i].value;
    }
    save(row1,string);
    
    var table_rows = document.getElementById("data_table").getElementsByTagName("tr")
    var column_3 = table_rows[rowindex].insertCell(2);
    var element_3 = document.createElement("a");
    var edit_row = document.createTextNode("Edit/");
    element_3.appendChild(edit_row);
    element_3.onclick =  (function(){newRowAndEdit(this,'edit')})

    var element_4 = document.createElement("a");
    var row_delete = document.createTextNode("Delete");
    element_4.appendChild(row_delete);
    element_4.setAttribute("onclick","remove(this);");

    column_3.appendChild(element_3);
    column_3.appendChild(element_4);
    
}
function save(row,string) {
     row.deleteCell(0);
     var column_1 = row.insertCell(0);
     var cell_1 = document.createElement("p");
     var cell1_data = document.createTextNode(string[0])
     cell_1.appendChild(cell1_data);
     column_1.appendChild(cell_1)
     
     row.deleteCell(1);
     var column_2 = row.insertCell(1);
     var cell_2 = document.createElement("p");
     var cell2_data = document.createTextNode(string[1]);
     cell_2.appendChild(cell2_data)
     column_2.appendChild(cell_2);
}
