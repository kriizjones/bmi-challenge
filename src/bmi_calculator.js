function BMICalculator(){
}

BMICalculator.prototype.bmi = function(obj) {
  var weight = obj.weight;
  var height = obj.height;
  var imperialswitch = obj.imperialswitch;
  if (weight > 0 && height > 0) {
  var k;
  var j;
    if (imperialswitch === true) {
      k = 703;
      j = 1;
    }
    else {
      k = 1;
      j = 100;
    }
    var finalBmi = weight * k / (height / j * height / j);
    obj.bmiValue = parseFloat(finalBmi.toFixed(2));
    setBMIMessage(obj);
  }
};

  function setBMIMessage (obj){
    if (obj.bmiValue < 18.5) {
      obj.bmiMessage = "Underweight";
  }

  if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
    obj.bmiMessage = "Normal";
  }

  if (obj.bmiValue > 25 && obj.bmiValue < 30) {
  obj.bmiMessage = "Overweight";
  }

  if (obj.bmiValue > 30) {
    obj.bmiMessage = "Obese";
  }
}
