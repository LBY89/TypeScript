const Total =({total}: {total: {name: string, exerciseCount: number}[]})=> {
    return(
        <div>
            <br/>
            Number of exercises{" "}
            {total.reduce((carry, part) => carry + part.exerciseCount, 0)}
        </div>
    );
}

export default Total