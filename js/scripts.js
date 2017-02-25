$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var personNameInput = $("input#personName").val();
    var questionOneInput = $("#question1").val();
    var questionTwoInput = $("#question2").val();
    var questionThreeInput = $("#question3").val();
    var questionFourInput = $("#question4").val();
    var questionFiveInput = $("#question5").val();
    console.log(questionOneInput);
    console.log(questionTwoInput);
    console.log(questionThreeInput);
    console.log(questionFourInput);
    console.log(questionFiveInput);

    $(".personResult").text(personNameInput);

    event.preventDefault();
  });
});
