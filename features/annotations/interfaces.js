// const oldCivic ={
//   name: 'civic',
//   year: new Date(),
//   broken: true,
//   summary(): string{
//     return `Name: ${this.name}`
//   }
// };
var lambo = {
    name: "tractor lambo",
    year: 2023,
    broken: false,
    summary: function () {
        return "Name: ".concat(this.name, ", which was released in ").concat(this.year, " and is in fresh condition broken: ").concat(this.broken, " ");
    }
};
var printVehicle = function (vehicle) {
    console.log(" ".concat(vehicle.summary()));
};
// printVehicle(oldCivic)
printVehicle(lambo);
// Flexible types 
// const importantDates: (Date | String)[] = [new Date(), '2030-10-10']
// importantDates.push("2023-1-23")
// importantDates.push(new Date(2023))
