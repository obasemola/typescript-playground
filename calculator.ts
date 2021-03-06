type Operation = 'multiply' | 'add' | 'divide';
type Result = number;

const calculator = (a: number, b: number, op: Operation): Result => {
  switch(op){
    case 'add':
      return a + b;

    case 'divide':
      return a / b;

    case 'multiply':
      return a * b;

    default:
      throw new Error('Operation is not proper type');
  }
};


console.log(calculator(1, 3, 'divide'));


console.log(process.argv[2]);