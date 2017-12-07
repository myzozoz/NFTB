$(document).ready(function() {
   $("#newslist").append("<ol/>");

   $.getJSON("http://localhost:8080/news/latest", function(data){
       $.each(data, function(i, article){
          $("ol").append("<li>" + article.title + "</li>");
       });
   });
});

