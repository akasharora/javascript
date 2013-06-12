function display(clicked_id) {
    var checkboxes = document.getElementById(clicked_id).getElementsByTagName("input")
    var list = document.getElementById(clicked_id).getElementsByTagName("ul")
    if (checkboxes[0].checked) {
        list[0].style.visibility = "visible"
    } else {
        list[0].style.visibility = "hidden"
        for (var i = 1; i < checkboxes.length; i++) {
						checkboxes[i].checked = false ;       
				}
    }
    
}
