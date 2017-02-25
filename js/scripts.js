$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var personNameInput = $("input#personName").val();
    var qOneInput = parseInt($("#question1").val());
    var qTwoInput = parseInt($("#question2").val());
    var qThreeInput = parseInt($("#question3").val());
    var qFourInput = parseInt($("#question4").val());
    var qFiveInput = parseInt($("#question5").val());

    if (qOneInput === 1 && qTwoInput === 1 && qThreeInput === 1 && qFourInput === 1 && qFiveInput === 1) {
      $("#NorthAmerica").show();
    }

    if (qOneInput === 2 && qTwoInput === 2 && qThreeInput === 2 && qFourInput === 2 && qFiveInput === 2) {
      $("#Asia").show();
    }

    if (qOneInput === 3 && qTwoInput === 3 && qThreeInput === 3 && qFourInput === 3 && qFiveInput === 3) {
      $("#Europe").show();
    }


    $(".personResult").text(personNameInput);
    $("#result").show();


    event.preventDefault();
  });
});
