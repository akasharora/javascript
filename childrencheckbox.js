function Display()
{
var a=document.getElementById("colors");
var b=document.getElementById("movies");
var c=document.getElementById("drinks");
var d=document.getElementById("bikes");
var e=document.getElementById("color");
var f=document.getElementById("movie");
var g=document.getElementById("drink");
var h=document.getElementById("bike");

if(a.checked)
{
e.style.visibility="visible";
}
else{
e.style.visibility="hidden";
}

if(b.checked)
{
f.style.visibility="visible";
}
else{
f.style.visibility="hidden";
}

if(c.checked)
{
g.style.visibility="visible";
}
else{
g.style.visibility="hidden";
}

if(d.checked)
{
h.style.visibility="visible";
}
else{
h.style.visibility="hidden";
}

}
