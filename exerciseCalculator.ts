interface dailyExerciseHoursAnalysis {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}


const calculateExercises = (args: Array<number>): dailyExerciseHoursAnalysis => {
  const periodLength = args.length;
  const trainingDays = args.map(arg => arg !== 0).filter(arg => arg !== false).length
  const totalHours = args.reduce((acc, currval) => {
    return acc + currval
  });
  const average = totalHours / args.length;
  const target = 2
  const success = average === target
  const ratingDescription = average >= target ? 'good' : 'not too bad but could be better'
  const rating = Math.round(average)

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  }

}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1]))