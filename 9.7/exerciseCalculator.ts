interface MultiplyValues {
  periodLength: number;
  trainingDays: number;
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

interface validatedArgs {
  value1: number,
  value2: Array<number>
}

type resultObj = MultiplyValues;

const parseExerciseArguments = (args: Array<string>): validatedArgs => {
  if (args.length < 4) throw new Error('Not enough arguments');
  const target = Number(args[2]);
  //console.log('args.slice(3)', args.slice(3));
  // [
  // '1',   '0', '2',
  // '4.5', '0', '3',
  //  '1',   '0', '4'
  //  ] string[] not operable. with normal split on array like thing. TS is a pain.
  const exerciseHours = args.slice(3).map(i=>Number(i));
  if (target === 0) throw new Error('target cannot be 0');
  else {
    return {
      value1: target,
      value2: exerciseHours
    };
  }
};
const exerciseCalculate =( target: number, hours: number[]): resultObj=> {
  
    const periodLength = hours.length;
    const trainingDays = hours.filter(hour =>{hour===0}).length;
    const average = hours.reduce((a, b) => a + b, 0)/7;
    
    
    // eslint-disable-next-line no-constant-condition
    const success = true ? average >= target : false;
    const rate = average/target;

    if(rate<=0.3) {//rate <= 30% is not a valid sytax, problem is %
        return {
            periodLength,
            trainingDays,
            success,
            rating: 1,
            ratingDescription:'too lazy',
            target,
            average
        };
        
    }
    else if( 0.3 < rate && rate <= 0.6) {
        return {
            periodLength,
            trainingDays,
            success,
            rating: 2,
            ratingDescription:'not bad',
            target,
            average
        };
    }
    else {
        return {
            periodLength,
            trainingDays,
            success,
            rating: 3,
            ratingDescription:'great job',
            target,
            average
        };
    }
    
 
};
try {
    const {value1, value2} = parseExerciseArguments(process.argv);
    console.log(exerciseCalculate(value1, value2));
  
  } catch (error: unknown) {
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
  }

  export default exerciseCalculate;