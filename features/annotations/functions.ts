// const add: (a: number, b: number) => number = (a: number, b: number): number => {
//   return (a + b)
// }
// add(1,3)

const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  return a - b
};


function divide(a: number, b: number): number {
  return a / b
}

const multiply = function (a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
}
// void cannot return any value


const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message)
  }
}
// intentionally throwing error 

// destructuring with annotation
const forecast = {
  date: new Date(),
  weather: "sunny"
}

const logWeather = ({ date, weather }: { date: Date, weather: string }) => {
  console.log(date)
  console.log(weather)
}

// Es 2015 ex
// const logWather = ({ date, weather }) => {
//   console.log(date)
//   console.log(weather)
// }