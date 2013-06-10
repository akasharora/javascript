function CheckForm() {
    var em = document.getElementById("email");
    var homep = document.getElementById("hp");
    var reemail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    var home1 = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])$/;
    var msg = "";

    if(!reemail.test(em.value)) {
        msg = "enter correct email";
    } else if(!home1.test(homep.value)) {
        msg = "Enter correct homepage";
    }
    if(msg!="") {
        msg = ""+msg;
    }
    else {
        msg = "form validated"
    }
    alert(msg);
    
}

