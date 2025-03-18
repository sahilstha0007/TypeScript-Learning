// fixing annotation
interface Vehicle{
  // name:string,
  // year: Date,
  // broken: boolean;
  summary(): string;

}



const oldCivic ={
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string{
    return `Name: ${this.name}`
  }
};


const printVehicle = (vehicle: Vehicle): void=>{
  console.log(` ${vehicle.summary()}`);
}

printVehicle(oldCivic)

// Flexible types 
const importantDates: (Date | String)[] = [new Date(), '2030-10-10']
importantDates.push("2023-1-23")
importantDates.push(new Date(2023))