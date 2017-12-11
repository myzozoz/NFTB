function category_createForm() {
    category_addNameInput($("<form class='category-form' name='category-form'></form>"));
}

function category_addNameInput(form) {
    form.append("<br><br>");
    form.append("<textarea id='cat_name' name='name' rows='1' cols='40'>Name</textarea>");
    form.append("<br>");
    category_addFormToPage(form);
}

function category_addFormToPage(form) {
    var div = $("#add-category").empty();
    div.append(form);
    div.append("<button type='button' class='send-category-form'>Add Category</button>")
    div.append("<br><br>")
}

$("#add-category").on("click", ".send-category-form", function() {
    var data = JSON.stringify({
        name : $("#cat_name").val()
    });
    category_send(data);
    category_createAdderButton();
});

function category_send(content) {
    $.ajax({
        url : "/categories",
        dataType : "json",
        contentType : "application/json; charset=utf-8",
        type : "post",
        data : content
    });
}