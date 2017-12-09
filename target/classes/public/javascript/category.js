$(document).ready(getCats());

function getCats() {
    $.getJSON("http://localhost:8080/categories", function(data) {
        listCategories(data);
    });
}

function listCategories(data) {
    var div = $("#catlist");
    div.append("<h2>Categories</h2>");
    $.each(data, function(i, cat) {
        var button = $("<input class='inspectable-category' type='button' value='" + cat.name + "'>");
        div.append(button);
    });
}

$("#catlist").on("click", ".inspectable-category", function(){
    inspect(this.value);
});

function inspect(name){
    $.getJSON("http://localhost:8080/categories/" + name , function(cat){
        var div = $("#catbody");
        div.empty();
        div.append("<h1>" + cat.name + "</h1>");
        div.append("<ul id='newslist'/>")
        $.getJSON("http://localhost:8080/categories/" + name + "/articles", function(data) {
            $.each(data, function(i, art) {
                console.log(art);
                $("#newslist").append("<li>" + art.title + "</li>");
            });
        });
    });
}