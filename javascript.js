var car1 = { position: 24 }
var car2 = { position: 12 }
var car3 = { position: 0 }
var light = { red: true }
var counter = 0

function checkLightStatus(){
  if(counter % 10 === 0 && light.red) {
    light.red = false
    document.getElementById("lightDisplay").style.backgroundColor = "green";
  } else if(counter % 10 === 0 && light.red === false) {
    light.red = true
    document.getElementById("lightDisplay").style.backgroundColor = "red";
  }

};

function advanceCar(car) {
  if(car.position == 50 && light.red == true) {
  } else {
    car.position++;
    document.getElementById("carOne").style.top = car1.position * 5 + "px";
    document.getElementById("carTwo").style.top = car2.position * 5 + "px";
    document.getElementById("carThree").style.top = car3.position * 5 + "px";
    document.getElementById("counterDisplay").innerHTML = counter;
  }
};

function advanceCounter() {
  advanceCar(car1);
  advanceCar(car2);
  advanceCar(car3);
  checkLightStatus();
  counter++;
};
