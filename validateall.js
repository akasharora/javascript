function CheckForm1()
{
var a=document.getElementById("login");
var b=document.getElementById("email");
var c=document.getElementById("name1");
var d=document.getElementById("home2");
var e=document.getElementById("tarea");
var f=document.getElementById("check");
var reemail=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var home1=/^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])$/;
var msg="";

if(a.value=="")
{
msg="login Id can't be empty";
}

else if(!reemail.test(b.value))
{
msg="enter correct email";
}

else if(c.value=="")
{
msg="name field can't be empty";
}

else if(!home1.test(d.value)){
msg="you have entered an invalid homepage";
}

else if(e.value.length<50){
msg="information is not complete";
}

if(f.checked){
confirm("are you sure you want to receive notifications?");
}

if(msg!="")
{
msg=""+msg;
}

else 
{
msg="form validated";
}

alert(msg);
preventDefault();
}
