function ShowMessage(msg)
{
document.getElementById("message").innerHTML+="<p>"+msg+"</p>";
}
var url=prompt("please enter url you want to open");
if(url==""){
alert("you have entered an empty url, please try again !!");
}else{

var v=window.open(url,"new win","width=400px,height=450px,resizable=0,scrollable=0,staty");
}
