function displayChildren(clicked_id) {
    var checkboxes = document.getElementById(clicked_id).getElementsByTagName("input");
    var div_list = document.getElementById(clicked_id).getElementsByTagName("div");
    if (checkboxes[0].checked) {
        div_list[0].style.display = "inherit"
        var ele = document.getElementById(clicked_id).scrollIntoView(true)
    } else {
        div_list[0].style.display = "none"
        for (var i = 1; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;       
        }
    }
}
// ele.scrollIntoView(true);
// document.getElementById("container").scrollTop = document.getElementById(clicked_id).offsetTop - 5;
// these methods should be avoided because javascript may be disabled
