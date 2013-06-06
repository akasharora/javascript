function FindDomain(){
var a=document.getElementById("url").value;
var b=document.getElementById("domain");
var s=document.getElementById("subdomain");
var c=a.split('//');
var d=c[1].split('/');
var e=d[0];
var f=d[0].split('.');
if(f.length==2)
{
b.value=d[0];
s.value="";
}
else{
s.value=f[0];
for(var i=1;i<f.length;i++){
b.value=b.value +f[i]+'.';
}
}
}
