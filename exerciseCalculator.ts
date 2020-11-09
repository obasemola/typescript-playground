import express from 'express';

const app = express();
app.use(express.json());

interface dailyExerciseHoursAnalysis {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

interface BodyObj {
  daily_exercises: Array<number>,
  target: number
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function determineIfBodyObj(toBeDetermined: any): toBeDetermined is BodyObj {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const isBodyObj: BodyObj = toBeDetermined;
  let itIsNotString;
  if(Array.isArray(isBodyObj.daily_exercises)){
    itIsNotString = false;
    isBodyObj.daily_exercises.forEach((item) => {
      if(typeof item !== 'number'){
        itIsNotString = true;
      }
    });
    
  }
  const checkIfArray = itIsNotString ? false : true;
  return typeof isBodyObj.target === 'number'
    && checkIfArray;
}


const calculateExercises = (args: Array<number>): dailyExerciseHoursAnalysis => {
  const periodLength = args.length;
  const trainingDays = args.map(arg => arg !== 0).filter(arg => arg !== false).length;
  const totalHours = args.reduce((acc, currval) => {
    return acc + currval;
  });
  const average = totalHours / args.length;
  const target = 2;
  const success = average === target;
  const ratingDescription = average >= target ? 'good' : 'not too bad but could be better';
  const rating = Math.round(average);

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  };

};

app.post('/exercises', (req, res) => {
  
  const requestBody = req.body as BodyObj;
  if(determineIfBodyObj(requestBody)){
    console.log('e no work');
  }
  
  //  eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  //  requestBody = req.body;
  //  {
  //   "daily_exercises": [1, 0, 2, 0, 3, 0, 2.5],
  //   "target": 2.5
  // };

  const args: Array<number> = requestBody.daily_exercises;
  const result = calculateExercises(args);
  result.target = requestBody.target;
  res.send(result);

  // console.log(req.body);

  // res.json(result);

});

// const args = Array.from(process.argv.slice(2)).map((arg) => {
//   return parseFloat(arg);
// });

// const args = [1, 0, 2, 0, 3, 0, 2.5]

// console.log(args);

// console.log(calculateExercises(args));

const PORT = 3004;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
