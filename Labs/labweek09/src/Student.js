function Student(props) {
    
    const stud = props.student

    return (
        <>
            <h2>Student ID: {stud.sid}</h2>
            <h3>Student Name: {stud.fnm + " " + stud.lnm}</h3>
        </>
    );
}

export default Student