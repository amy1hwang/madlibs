$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val().toUpperCase();
    var person2Input = $("input#person2").val().toUpperCase();
    var placeInput= $("input#place").val().toUpperCase();
    var questionInput = $("input#question").val().toUpperCase();
    var verbInput = $("input#verb").val().toUpperCase();
    var nounInput = $("input#noun").val().toUpperCase();

    $(".name").text(nameInput);
    $(".person2").text(person2Input);
    $(".place").text(placeInput);
    $(".question").text(questionInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});
