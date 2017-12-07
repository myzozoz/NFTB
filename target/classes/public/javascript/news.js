$(document).ready(function() {
   $("#newslist").append("<dl/>");

   $.getJSON("http://localhost:8080/articles/latest", function(data){
       $.each(data, function(i, article){
           var link = "http://localhost:8080/news/" + article.id;
          $("dl").append("<dt><a href=" + link + " >" + article.title + "</a></dt>").append("<dd>" + article.lead + "</dd>")
       });
   });
});

