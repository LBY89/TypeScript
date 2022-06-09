import { CoursePart } from '../App';

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};
const Part =({course}: {course: CoursePart})=> {
    
    switch(course.type){
        case "normal":
            return(
                <div>
                    <h3>{course.name} {course.exerciseCount}</h3>
                    {course.description}
                </div>
            )
            break;
        case "groupProject":
            return(
                <div>
                    <h3>{course.name} {course.exerciseCount}</h3>
                    project exercises {course.groupProjectCount}
                </div>
            )
            break;
        case "submission":
            return(
                <div>
                    <h3>{course.name} {course.exerciseCount}</h3>
                    <div>{course.description}</div>
                    submit to {course.exerciseSubmissionLink}
                </div>
            )
            break;
        case "special":
            return(
                <div>
                    <h3>{course.name} {course.exerciseCount}</h3>
                    <div>{course.description}</div>
                    required skills: {course.requirements[0]}, {course.requirements[1]}
                </div>
            )
        default:
            return assertNever(course)
    }
    
    
}

export default Part