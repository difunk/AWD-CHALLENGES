import { students } from '../studentData';

const Challenge11 = () => {
  return (
    <>
        <div style={{ backgroundColor: "white", border: "2px solid black", borderRadius: "12px", padding: "12px", margin: "12px"}}>
            <p style={{ fontWeight: "bold"}}>
                Coding: Highlight Students
            </p>

            <div style={{ display: "flex", gap: "20px", marginTop: "12px" }}>
                {students.map((student, index) => {
                const displayString =  `${student.firstName} ${student.lastName} (${student.age})`;

                    return(
                        <div key={index}>
                            <div>{displayString}</div>
                            {displayString.split("").map((_, index) => (
                                <span key={index}>{"="}</span> 
                            ))}

                            <div style={{ display: "flex", alignItems: "center"}}>
                                <p style={{ whiteSpace: "pre"}}>Grades: </p>
                                {student.grades.map((grade, index) => 
                                    <div key={index} style={{ whiteSpace: "pre"}}>
                                        {grade === undefined ? "*" : grade}
                                        {index < student.grades.length -1 ? ", " : ""}
                                    </div>
                                )}
                            </div>
                            <div style={{ marginTop: "16px"}}>
                                <p>Noten:</p>
                                {student.transcripts.map((transcript, index) => 
                                    <div style={{ display: "flex"}} key={index}>
                                        {`${transcript.subject}:\u00A0`}
                                        <div style={{ display: "flex", flexDirection: "row"}}>
                                            {transcript.grades.map((grade, index) => 
                                               <div>
                                                {grade === undefined ? "*" : grade}
                                                {index < transcript.grades.length - 1 ? "," : ""}</div> 
                                            )} 
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default Challenge11