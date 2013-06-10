function DomainSubdomain() {
    console.log("hi")
    var url = document.getElementById("url").value;
    var domain = "", subdomain = "" ;
    var matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)
    name= matches && matches[1];
    name1 = name.split('.');
    if(name1.length > 2) {
        subdomain = name1[0];
        for (var i = 1; i < name1.length; i++) {
           domain = domain + name1[i] + '.'
        }
       alert("Your domain is "+domain + " and subdomain is " + subdomain)
    }

    else {
        domain = name;
    alert("Your domain is " + domain);
    }
    
}
