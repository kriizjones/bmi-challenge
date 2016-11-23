describe('BMI_UI - index.html', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);

  });
  describe('displays responds Message with metric switch', function() {
    beforeEach(function() {
      $(":radio")[0].click();
      $('#weight').val('90');
      $('#height').val('186');
      $('#calculate').click();

    });

    it("displays BMI Value", function() {
      expect($('#display_value').text()).toBe('Your BMI is 26.01');
    });

    it("displays BMI Message", function() {
      expect($('#display_message').text()).toBe('and you are Overweight');
    });
  });

describe('imperial display set a responds', function() {
  beforeEach(function() {
    $(":radio")[1].click();
    $('#weight').val('200');
    $('#height').val('66');
    $('#calculate').click();

  });

  it("BMI value for imperial", function() {
    expect($('#display_value').text()).toBe('Your BMI is 32.28');
  });

  it("BMI message imperial", function() {
    expect($('#display_message').text()).toBe('and you are Obese');
  });
});


});
