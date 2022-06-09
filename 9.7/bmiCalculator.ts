interface CheckMultiplyValues {
  value1: number;
  value2: number;
}

const parseBmiArguments = (args: Array<string>): CheckMultiplyValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');
 
  
  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3])
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

const calculateBmi = (h: number, w: number) => {
  const bmi = w/(h/100*h/100);
  if (bmi <= 18.5) {
    return 'Underweight';
  }
  else if (bmi <= 24.9 && bmi > 18.5) {
    return 'Normal weight';
  }
  else if (bmi <= 29.9 && bmi > 25) {
    return 'Overweight';
  }
  else 

  return 'Ob';

};

try {
  const {value1, value2} = parseBmiArguments(process.argv);
  calculateBmi(value1, value2);

} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}

export default calculateBmi;
  
  