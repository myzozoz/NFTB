$(document).ready(function() {
    listCats();
});



function listCats() {
    var div = $("#catlist");
    div.append("<h2>Categories</h2>")
    $.getJSON("http://localhost:8080/categories", function(data) {
        $.each(data, function(i, cat) {
            //var button = $("<input type='button' value='" + cat.name + "' onclick='inspect()'>");
            var button = $("<input class='inspectable' type='button' value='" + cat.name + "'>");
            div.append(button);
        });
    });
}

$("#catlist").on("click", ".inspectable", function(){
    inspect(this.value);
});

function inspect(name){
    $.getJSON("http://localhost:8080/categories/" + name, function(cat){
        var div = $("#catbody");
        div.empty();
        div.append("<h1>" + cat.name + "</h1>");
        div.append("<ul id='newslist'/>")
        $.each(cat.articles, function(i, art){
            $("#newslist").append("<li>" + art.title + "</li>");
        });
    });
}