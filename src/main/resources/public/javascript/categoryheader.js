$(document).ready(function() {

    $.getJSON("/categories", function(cats){
        var ul = $("#categories");
       $.each(cats, function(i, cat) {
           ul.append("<button type='button' class='header-category' name='" + cat.name + "'>" + cat.name + "</button>")
       });
    });
});

$("#categories").on("click", ".header-category", function() {
    sessionStorage.setItem("current-category", this.name);
    document.location.href = "/category";
});