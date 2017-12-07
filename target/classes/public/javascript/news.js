$(document).ready(function() {
   $("#newslist").append("<ol/>");

   $.getJSON("http://localhost:8080/articles/latest", function(data){
       $.each(data, function(i, article){
          $("ol").append("<li><a href='http://localhost:8080/articles/'" + article.id + ">" + article.title + "</a></li>");
       });
   });
});

