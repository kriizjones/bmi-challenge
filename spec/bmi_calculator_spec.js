describe("BMIcalculator", function() {
  var calculator;
  var person;

  beforeEach(function() {
      person = new Person({weight: 110, height: 176});
      calculator = new BMICalculator();
});

it("calculates BMI for a person using metric method", function() {
  calculator.metric_bmi(person);
  expect(person.bmiValue).toEqual(26.01);
});

});
