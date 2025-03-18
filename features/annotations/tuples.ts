const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// type alias
type Drink = [string, boolean, number]

const pepsi: Drink = ["brown", true, 40];
// Data loose
// pepsi[0] = 40
// pepsi[2] = "brown"


const tea: Drink = ["green", false, 10]
const fanta: Drink = ["orange", true, 50]


const carSpecs: [number, number]= [400, 3354]


const carStats  ={
  horsePower : 400,
  weight: 4400
}