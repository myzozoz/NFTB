$(document).ready(function() {
    if (sessionStorage.getItem("current-category")){
        inspect(sessionStorage.getItem("current-category"));
    }
    sessionStorage.removeItem("current-category")
});

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
    $.getJSON("/categories/" + name , function(cat){
        var div = $("#catbody");
        div.empty();
        div.append("<h1>" + cat.name + "</h1>");
        div.append("<ul id='newslist'/>");
        addArticles(name);
    });
}

function addArticles(name) {
    $.getJSON("/categories/" + name + "/articles", function(data) {
        $.each(data, function(i, art) {
            var date = toDateTime(art.publishDate);
            $("#newslist")
                .append("<li class='news-link' id='" + art.id + "'>"
                    + art.title + ", "
                    + date.toLocaleDateString() + " "
                    + date.toLocaleTimeString()
                    +  "</li>");
        });
    });
}

$("#catbody").on("click", ".news-link", function() {
    sessionStorage.setItem("current-article", this.id);
    document.location.href = "/news";
});