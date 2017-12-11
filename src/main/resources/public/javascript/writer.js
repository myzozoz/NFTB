$(document).ready(getWriters());


function getWriters() {
    $.getJSON("/writers", function(data) {
        listWriters(data);
    });
}

function listWriters(data) {
    var div = $("#writerlist");
    $.each(data, function(i, writer) {
        var button = $("<input class='inspectable-writer' type='button' id='" + writer.id + "' value='" + writer.name + "'>");
        div.append(button);
    });
}

$("#writerlist").on("click", ".inspectable-writer", function() {
    show(this.id);
});

function show(id) {
    $.getJSON("/writers/" + id, function(writer) {
        var div = $("#writerprofile");
        div.empty();
        div.append("<img src='/writers/" + id + "/picture'>");
        div.append("<p>Name: " + writer.name + "</p>");
        div.append("<p>Date of Birth: " + writer.birthday + "</p>");
        div.append("<hr>");
        div.append("<ul id=writer-articles/>")
        $.getJSON("/writers/" + id + "/articles", function(articles) {
            $.each(articles, function(i, art){
                var date = toDateTime(art.publishDate);
                $("#writer-articles")
                    .append("<li class='news-link' id='" + art.id + "'>"
                        + art.title + ", "
                        + date.toLocaleDateString() + " "
                        + date.toLocaleTimeString() + "</li>");
            });
        });
        div.append("<hr>");
    });
}

$("#writerprofile").on("click", ".news-link", function(){
    sessionStorage.setItem("current-article", this.id);
    document.location.href = "/news";
});