$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var personNameInput = $("input#personName").val();

    $(".personResult").text(personNameInput);

    event.preventDefault();
  });
});
