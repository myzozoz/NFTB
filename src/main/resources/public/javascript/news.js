$(document).ready(function() {
   $("#newslist").append("<ol/>");

   $.getJSON("http://localhost:8080/news", function(data){
       $.each(data, function(i, article){
          $("ol").append("<li>" + article.title + "</li>");
       });
   });
});

