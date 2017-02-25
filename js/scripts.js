$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var personNameInput = $("input#personName").val();
    var qOneInput = parseInt($("#question1").val());
    var qTwoInput = parseInt($("#question2").val());
    var qThreeInput = parseInt($("#question3").val());
    var qFourInput = parseInt($("#question4").val());
    var qFiveInput = parseInt($("#question5").val());

    //All Equal Statements

    if (qOneInput === 1 && qTwoInput === 1 && qThreeInput === 1 && qFourInput === 1 && qFiveInput === 1) {
      $("form").hide();
      $("#NorthAmerica").fadeIn("slow");
    }

    else if (qOneInput === 2 && qTwoInput === 2 && qThreeInput === 2 && qFourInput === 2 && qFiveInput === 2) {
      $("form").hide();
      $("#Asia").fadeIn("slow");
    }

    else if (qOneInput === 3 && qTwoInput === 3 && qThreeInput === 3 && qFourInput === 3 && qFiveInput === 3) {
      $("form").hide();
      $("#Europe").fadeIn("slow");
    }

    //Multi Statement Results

    else if (qOneInput === 1 && qTwoInput === 1 && qThreeInput === 1 || qTwoInput === 1 && qThreeInput === 1 && qFourInput === 1 || qThreeInput === 1 && qFourInput === 1 && qFiveInput === 1 || qOneInput === 1 && qThreeInput === 1 && qFiveInput === 1 || qOneInput === 1 && qFourInput === 1 && qFiveInput === 1) {
      $("form").hide();
      $("#NorthAmerica").fadeIn("slow");
    }

    else if (qOneInput === 2 && qTwoInput === 2 && qThreeInput === 2 || qTwoInput === 2 && qThreeInput === 2 && qFourInput === 2 || qThreeInput === 2 && qFourInput === 2 && qFiveInput === 2 || qOneInput === 2 && qThreeInput === 2 && qFiveInput === 2 || qOneInput === 2 && qFourInput === 2 && qFiveInput === 2) {
      $("form").hide();
      $("#Asia").fadeIn("slow");
    }

    else if (qOneInput === 3 && qTwoInput === 3 && qThreeInput === 3 || qTwoInput === 3 && qThreeInput === 3 && qFourInput === 3 || qThreeInput === 3 && qFourInput === 3 && qFiveInput === 3 || qOneInput === 3 && qThreeInput === 3 && qFiveInput === 3 || qOneInput === 3 && qFourInput === 3 && qFiveInput === 3) {
      $("form").hide();
      $("#Europe").fadeIn("slow");
    }

    else {
      $("form").hide();
      $("#Europe").fadeIn("slow");
    }

    // Result

    $(".personResult").text(personNameInput);
    $("#result").fadeIn();

    event.preventDefault();

  });

});
