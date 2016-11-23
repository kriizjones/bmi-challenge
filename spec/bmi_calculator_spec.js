describe("BMIcalculator", function() {
  var calculator;
  var person;

  beforeEach(function() {
      person = new Person({weight: 90, height: 186, imperialswitch: false});
      calculator = new BMICalculator();
});

it("calculates BMI for a person using metric method", function() {
  calculator.bmi(person);
  expect(person.bmiValue).toEqual(26.01);
});

it("should have bmimessage", function() {
  calculator.bmi(person);
  expect(person.bmiMessage).toEqual("Overweight");
});

describe("calculate with imperial bmi methods", function(){
  beforeEach(function() {
      person = new Person({weight: 200, height: 66, imperialswitch: true});
      calculator = new BMICalculator();
    });
    it ("should calculate bmi with imperial unit", function(){
      calculator.bmi(person);
      expect(person.bmiValue).toEqual(32.28);
    });
});



});
