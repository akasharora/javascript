function Edit(event)
{

}

function Delete(event1)
{
var row1=event1.parentElement.parentElement;
document.all("tab").deleteRow(row1.rowIndex);
}

function NewRow()
{
var a=document.getElementById("tab");

var len=a.rows.length;
var row=a.insertRow(len);

var col1=row.insertCell(0);
var element1=document.createElement("input");
element1.type="textbox";
col1.appendChild(element1);

var col2=row.insertCell(1);
var element2=document.createElement("input");
element2.type="textbox";
col2.appendChild(element2);

var col3=row.insertCell(2);
var element3=document.createElement("a");

var edit=document.createTextNode("Edit/");
element3.appendChild(edit)
element3.setAttribute("onclick","Edit(this);");


var element4=document.createElement("a");

var del=document.createTextNode("Delete");
element4.appendChild(del);
element4.setAttribute("onclick","Delete(this);");

col3.appendChild(element3);
col3.appendChild(element4);

}
