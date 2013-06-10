function Display() {
    var colors = document.getElementById("colors");
    var movies = document.getElementById("movies");
    var drinks = document.getElementById("drinks");
    var bikes = document.getElementById("bikes");
    var col = document.getElementById("color");
    var mov = document.getElementById("movie");
    var drink = document.getElementById("drink");
    var bike = document.getElementById("bike");

    if(colors.checked) {
        col.style.visibility = "visible";
    }
    else {
        col.style.visibility = "hidden";
    }

    if(movies.checked) {
        movie.style.visibility = "visible";
    }
    else {
        movie.style.visibility = "hidden";
    }

    if(drinks.checked) {
        drink.style.visibility = "visible";
    }
    else {
        drink.style.visibility = "hidden";
    }

    if(bikes.checked) {
        bike.style.visibility = "visible";
    }
    else {
        bike.style.visibility = "hidden";
    }
}
