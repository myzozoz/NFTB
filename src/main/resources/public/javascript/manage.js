$(document).ready(function() {
    article_createAdderButton();
    writer_createAdderButton();
    category_createAdderButton();
});

$("#add-article").on("click", ".article-adder-button", function() {
    article_createForm();
});

$("#add-writer").on("click", ".writer-adder-button", function() {
    writer_createForm();
});

$("#add-category").on("click", ".category-adder-button", function(){
    category_createForm();
});

function article_createAdderButton() {
    $("#add-article").empty().append("<button class='article-adder-button'>Add Article</button>");
}

function writer_createAdderButton() {
    $("#add-writer").empty().append("<button class='writer-adder-button'>Add Writer</button>");
}

function category_createAdderButton() {
    $("#add-category").empty().append("<button class='category-adder-button'>Add Category</button>");
}