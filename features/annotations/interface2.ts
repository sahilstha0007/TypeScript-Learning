interface Add{
  sum(): number
}


const sumation={
  a:1,
  b:2,
  sum():number{
    return this.a+ this.b
  }
}


const addReport=(add:Add): void=>{
  console.log(add.sum())
}

addReport(sumation)