$(document).ready(getWriters());


function getWriters() {
    $.getJSON("http://localhost:8080/writers", function(data) {
        listWriters(data);
    });
}

function listWriters(data) {
    var div = $("#writerlist");
    div.append("<h2>Writers</h2>");
    $.each(data, function(i, writer) {
        var button = $("<input class='inspectable-writer' type='button' id='" + writer.id + "' value='" + writer.name + "'>");
        div.append(button);
    });
}

$("#writerlist").on("click", ".inspectable-writer", function() {
    show(this.id);
});

function show(id) {
    $.getJSON("http://localhost:8080/writers/" + id, function(writer) {
        var div = $("#writerprofile");
        div.empty();
        div.append("<p>Name: " + writer.name + "</p>");
        div.append("<p>Date of Birth: " + writer.birthday + "</p>");
        div.append("<ul id=writer-articles/>")
        $.getJSON("http://localhost:8080/writers/" + id + "/articles", function(articles) {
            $.each(articles, function(i, art){
                var date = toDateTime(art.publishDate);
                $("#writer-articles")
                    .append("<li class='news-link' id='" + art.id + "'>"
                        + art.title + ", "
                        + date.toLocaleDateString() + " "
                        + date.toLocaleTimeString() + "</li>");
            });
        });
    });
}

$("#writerprofile").on("click", ".news-link", function(){
    sessionStorage.setItem("current-article", this.id);
    document.location.href = "/news";
});