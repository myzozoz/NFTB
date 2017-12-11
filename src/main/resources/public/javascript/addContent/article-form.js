function article_createForm() {
    article_addTitleInput($("<form class='article-form' name='article-form'></form>"));
}

function article_addTitleInput(form) {
    form.append("<textarea id='title' name='title' rows='1' cols='60'>Title</textarea>");
    form.append("<br>");
    article_addLeadInput(form);
}

function article_addLeadInput(form) {
    form.append("<textarea id='lead' name='lead' rows='2' cols='80'>Lead</textarea>");
    form.append("<br>");
    article_addBodyInput(form);
}

function article_addBodyInput(form) {
    form.append("<textarea id='body' name='body' rows='20' cols='80'>Text</textarea>");
    form.append("<br>");
    article_addWriters(form);
}

function article_addWriters(form) {
    var select = $("<select name='writers' size='5' id='select-writer'></select>")
    $.getJSON("/writers", function(data) {
        $.each(data, function(i, writer) {
            select.append("<option class='add-writer-from-list' id='" + writer.id + "' value='" + writer.id + "'>"
                + writer.name + "</option>");
        });
    });
    form.append(select);
    form.append("<ul id='added-writers'></ul>");
    form.append("<br>");
    article_addCategories(form);
}

function article_addCategories(form) {
    var select = $("<select name='categories' size='5' id='select-category'></select>")
    $.getJSON("/categories", function(data) {
        $.each(data, function(i, cat) {
            select.append("<option class='add-category-from-list' id='" + cat.id + "' value='" + cat.name + "'>"
                + cat.name + "</option>");
        });
    });
    form.append(select);
    form.append("<ul id='added-categories'></ul>");
    article_addFormToPage(form);
}

function article_addFormToPage(form) {
    var div = $("#add-article").empty();
    div.append(form);
    div.append(article_addPicture());
    div.append("<button type='button' class='send-article-form'>Publish article</button>")
    div.append("<br><br>")
}

function article_addPicture() {
    var picForm = $("<form id='a-picform' enctype='multipart/form-data'></form>");
    picForm.append("<input id='article-picture' name='article-picture' type='file' accept='image/*' value='Choose picture'>");
    picForm.append("<br>");
    return picForm;
}

$("#add-article").on("click", ".add-category-from-list", function() {
    $.getJSON("/categories/" + this.value, function(cat) {
        $("#added-categories").append("<li id='" + cat.name + "'>" + cat.name + "</li>");
    });
});

$("#add-article").on("click", ".add-writer-from-list", function() {
    $.getJSON("/writers/" + this.value, function(writer) {
        $("#added-writers").append("<li id='" + writer.id + "'>" + writer.name + "</li>");
    });
});

$("#add-article").on("click", ".send-article-form", function() {
    var data = JSON.stringify({
        title : $("#title").val(),
        lead : $("#lead").val(),
        body : $("#body").val(),
        publishDate : new Date($.now())
    });

    article_send(data);
    article_createAdderButton();
});

function article_send(content) {
    $.ajax({
        url : "/articles",
        dataType : "json",
        contentType : "application/json; charset=utf-8",
        type : "post",
        data : content,
        success : function(data) {
            article_sendWriters(data.id);
            article_sendCategories(data.id);
            article_sendPicture(data.id);
            goToArticle(data.id);
        }
    });
}

function article_sendWriters(article_id) {
    $("#added-writers").children().each(function() {
        $.ajax({
            url : "/articles/" + article_id + "/writers/" + this.id,
            type : "put"
        });
    });
}

function article_sendCategories(article_id) {
    $("#added-categories").children().each(function() {
        $.ajax({
            url : "/articles/" + article_id + "/categories/" + this.id,
            type : "put"
        });
    });
}

var pic_files = [];

$("#add-article").on("change", "#article-picture", function (event){
    pic_files = event.target.files;
    console.log(pic_files);
});

function article_sendPicture(article_id) {
    var content = new FormData();
    content.append("file", pic_files[0])

    $.ajax({
        url : "/articles/" + article_id + "/picture",
        type : "post",
        enctype : "multipart/form-data",
        data : content,
        processData : false,
        contentType : false,
        success : function(reply) {
            alert(reply);
        }
    });
}

function goToArticle(id) {
    sessionStorage.setItem("current-article", id);
    document.location.href = "/news";
}