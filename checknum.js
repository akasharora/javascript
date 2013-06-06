function CheckValue(){
var a=document.getElementById("num");
var b=document.getElementById("result");
var re=/^[0-9]+$/
if(!re.test(a.value)){
b.value="false"
alert("you have entered wrong value");
}
else
{
b.value="true";
}
}
