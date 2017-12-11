$(document).ready(function() {
    $("#add-article").append("<button class='article-adder-button'>Add article</button>");
    $("#add-writer").append("<button class='writer-adder-button'>Add writer</button>");
    $("#add-category").append("<button class='category-adder-button'>Add category</button>");
});

$("#add-article").on("click", ".article-adder-button", function() {
    article_createForm();
});

$("#add-writer").on("click", ".writer-adder-button", function() {
    writer_createForm();
});

$("#add-category").on("click", ".category-adder-button", function(){

});