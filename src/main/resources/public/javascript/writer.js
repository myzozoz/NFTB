$(document).ready(getWriters());


function getWriters() {
    $.getJSON("http://localhost:8080/writers", function(data) {
        listWriters(data);
    });
}

function listWriters(data) {
    var div = $("#writerlist");
    div.append("<h2>Writers</h2>");
    $.each(data, function(i, writer) {
        var button = $("<input class='inspectable-writer' type='button' id='" + writer.id + "' value='" + writer.name + "'>");
        div.append(button);
    });
}

$("#writerlist").on("click", ".inspectable-writer", function(){
    console.log(this.id);
    show(this.id);
});

function show(id) {
    $.getJSON("http://localhost:8080/writers/" + id, function(writer) {
        var div = $("#writerprofile");
        div.empty();
        div.append("<p>Name: " + writer.name + "</p>");
        div.append("<p>Date of Birth: " + writer.birthday + "</p>");
        div.append("<p>Articles " + writer.articles + "</p>");
    })
}