const calculateBmi = (mass: number, height: number): string => {
  const result = mass / Math.pow((height / 100), 2)

  if(result < 18.5) {
    return 'underweight'
  }
  else if (result > 18.5 && result <= 24.9){
    return 'Normal (healthy weight)'
  }
  else if (result > 25.0 && result <= 29.9){
    return 'Overweight'
  }
  else {
    return 'Obese'
  }
}


console.log(calculateBmi(74, 180))