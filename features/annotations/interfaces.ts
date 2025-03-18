// fixing annotation
interface Reportable{
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

const lambo = {
  name: "tractor lambo",
  year: 2023,
  broken: false,
  summary(): string{
    return`Name: ${this.name}, which was released in ${this.year} and is in fresh condition broken: ${this.broken} `
  }
}


const drink ={
  color :" brown",
  carbonated: true,
  sugar: 40,
  summary(): string{
    return `My drink has ${this.sugar} gram of sugar`
  }
}

const printSummary= (item: Reportable): void=>{
  console.log(` ${item.summary()}`);
};

printSummary(oldCivic)
printSummary(lambo)
printSummary(drink)

// Flexible types 
const importantDates: (Date | String)[] = [new Date(), '2030-10-10']
importantDates.push("2023-1-23")
importantDates.push(new Date(2023))