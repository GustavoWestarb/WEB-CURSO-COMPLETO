function Car(speedMax = 200, delta = 5){
    //attribute private
    let currentSpeed = 0;

    //method public
    this.accelerate = function(){
        if (currentSpeed + delta <= speedMax) {
            currentSpeed += delta;
        } else{
            currentSpeed = speedMax;
        }
    }

    //method public
    this.getCurrentSpeed = function(){
        return currentSpeed;
    }
}

const uno = new Car;
uno.accelerate();
console.log(uno.getCurrentSpeed());

const ferrari = new Car(350, 20);
ferrari.accelerate();
ferrari.accelerate();
ferrari.accelerate();
console.log(ferrari.getCurrentSpeed());