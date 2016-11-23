$(document).ready(function () {
  $('#calculate').click(function () {
    var w = parseFloat($('#weight').val());
    var h = parseFloat($('#height').val());
    var d = ($('input[name=imperialswitch]:checked').val() === "true");
    var person = new Person({weight: w, height: h, imperialswitch: d});
    person.calculate_bmi();
    $('#display_value').html('Your BMI is ' + person.bmiValue);
    $('#display_message').html('and you are ' + person.bmiMessage);
  });
});
