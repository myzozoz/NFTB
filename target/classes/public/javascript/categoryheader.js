$(document).ready(function() {

    $.getJSON("http://localhost:8080/categories", function(cats){
        var ul = $("#categories");
       $.each(cats, function(i, cat) {
           ul.append("<li><a href='http://localhost:8080/category'>" + cat.name + "</a></li>");
       });
    });
});