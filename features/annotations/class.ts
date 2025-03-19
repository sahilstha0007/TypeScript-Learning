class Vehicle {
  // public drive(): void {
  //   console.log("Brummm Brummm")
  // }
  public honk(): void {
    console.log("beep")
  }
}


class Car extends Vehicle {
  private drive(): void {
    console.log("Chagaa chagaaa")
  }

  startDrivingPrcess():void{
    this.drive
  }
  horn(): void {
    console.log("nannannaa nannnannnannn")
  }

}

const car = new Car();
car.startDrivingPrcess()
car.horn()

// const vehicle = new Vehicle();
// vehicle.drive()
// vehicle.honk()
