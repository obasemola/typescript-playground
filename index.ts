import express from 'express'
import { calculateBmi } from './bmiCalculator'
const app = express();

app.get('/bmi',(req, res) => {
  
  const weight = Number(req.query.weight);
  const height = Number(req.query.height)
  const result = calculateBmi(weight, height)
  if(isNaN(weight) || isNaN(height)){
    res.send({
      error: "malformatted paramerters"
   })
  }


  const response = {
    weight,
    height,
    result
  }

  try {
    res.send(response)
  } catch(e) {
    res.send(e.error)
  }

  // console.log(query)
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
