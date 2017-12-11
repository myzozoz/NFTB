function writer_createForm() {
    writer_addNameInput($("<form class='writer-form' name='writer-form'></form>"));
}

function writer_addNameInput(form) {
    form.append("<br><br>");
    form.append("<textarea id='wr_name' name='name' rows='1' cols='40'>Name</textarea>");
    form.append("<br>");
    writer_addBirthdayInput(form);
}

function writer_addBirthdayInput(form) {
    form.append("<input type='date' id='birthday' name='birthday'>");
    form.append("<br>");
    writer_addPicture(form);
}

function writer_addPicture(form) {
    form.append("<input id='profile-picture' type='file' accept='image/*' value='Choose picture'>");
    form.append("<br>");
    writer_addFormToPage(form);
}


function writer_addFormToPage(form) {
    var div = $("#add-writer").empty();
    div.append(form);
    div.append("<button type='button' class='send-writer-form'>Add Writer</button>")
    div.append("<br><br>")
}

$("#add-writer").on("click", ".send-writer-form", function(){
    var data = JSON.stringify({
        name : $("#wr_name").val(),
        birthday : $("#birthday").val()
    });
    writer_send(data);
    writer_createAdderButton();
});

function writer_send(content) {
    $.ajax({
        url : "/writers",
        dataType : "json",
        contentType : "application/json; charset=utf-8",
        type : "post",
        data : content
    });
}