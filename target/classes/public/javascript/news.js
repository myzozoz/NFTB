$(document).ready(function() {
    if (sessionStorage.getItem("current-article")){
        readmore(sessionStorage.getItem("current-article"));
    }
    sessionStorage.removeItem("current-article");

    $("#newslist").append("<dl/>");

    $.getJSON("/articles/latest", function(data){
        $.each(data, function(i, article){
            var button = $("<input type='button' value='Read more...' onclick='readmore(" + article.id + ")'/>");
            $("dl").append("<dt>" + article.title + "</dt>")
              .append("<dd>" + article.lead + "</dd>")
              .append(button);
        });
    });
});

function readmore(id){
    $.getJSON("/articles/" + id, function(article){
        var section = $("#article");
        section.empty();
        section.append("<img src='/articles/" + id + "/picture'>");
        section.append("<h2>" + article.title + "</h2>");
        section.append("<h4>" + article.lead + "</h4>");
        section.append("<p>" + article.body + "</p>");
        section.append("<hr>");
    });
}

