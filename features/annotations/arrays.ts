const carMakers: string[] = ['ford', 'toyota', 'lambo'];
const dates: Date[] = [new Date(), new Date()]

const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['comaro']
]

// help with inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop()

// Prevent incompatible values
// carMakers.push(100)

// help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
}
)