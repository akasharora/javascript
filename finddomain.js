function domainSubdomain() {
    var url = document.getElementById("url").value;
    var domain_subdomain = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
    var domain_regex = /(\w+)\.(\w+)$/;
    var subdomain_regex = /^((\w+\.)*)+(\w+)\.(\w+)$/;
    var domain = domain_subdomain[1].match(domain_regex)
    var subdomain = domain_subdomain[1].match(subdomain_regex)
    if(subdomain[1]) {
        alert("your domain is " + domain[0] + " and your subdomain is " + subdomain[1])
    } else {
        alert("your domain is " + domain[0])
    }
}
