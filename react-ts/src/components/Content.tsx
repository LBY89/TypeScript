import Part from './Part';
import { CoursePart } from '../App';

const Content =({parts}: {parts: CoursePart[]}) => {
    //parts being an array cannot be returnd altogether. but ts error message was not clear. 
    return(
        <div>
            {parts.map((part, index) => <Part key={index} course={part}/>)}
        </div>
    );
};

export default Content;