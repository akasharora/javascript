function findDomain() {
    var url = document.getElementById("url").value;
    var domain_subdomain = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
    var domain_regex = /(\w+)\.(\w+)$/;
    var subdomain_regex = /^((\w+\.)*)+(\w+)\.(\w+)$/;
    var domain = domain_subdomain[1].match(domain_regex);
    var subdomain = domain_subdomain[1].match(subdomain_regex);
    var msg = "";
    if (subdomain[1]) {
        msg = " subdomain: " + subdomain[1];    
    }
    alert("your domain: " + domain[0] + msg)
}
