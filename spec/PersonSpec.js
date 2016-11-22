describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({weight: 110, height: 176});
  });

  it("should have weight of 110", function() {
    expect(person.weight).toEqual(110);
  });

  it("should have height of 176", function() {
    expect(person.height).toEqual(176);
  });

  it("should calculate BMI value", function() {
    person.calculate_bmi();
    expect(person.bmiValue).toEqual(26.01)
  });

  it("should have a BMI Message", function() {
    person.calculate_bmi();
    expect(person.bmiMessage).toEqual("Overweight")
  });
});
