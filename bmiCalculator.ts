const calculateBmi = (mass: number, height: number) => {
  const result = mass / Math.pow((height / 100), 2)

  if(result < 18.5) {
    console.log('underweight')
  }
  else if (result > 18.5 && result <= 24.9){
    console.log('Normal (healthy weight)')
  }
  else if (result > 25.0 && result <= 29.9){
    console.log('Overweight')
  }
  else {
    console.log('Obese')
  }
}


calculateBmi(74, 180)