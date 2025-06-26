import { students } from '../studentData';

const Challenge10 = () => {
  return (
    <>
        <div style={{ backgroundColor: "white", border: "2px solid black", borderRadius: "12px", padding: "12px", margin: "12px"}}>
            <p style={{ fontWeight: "bold"}}>
                Coding: TypeScript Type
            </p>

            <div style={{ display: "flex", gap: "20px", marginTop: "12px" }}>
                {students.map((student) => 
                    <div>
                        <p>First Name: {student.firstName} {student.lastName} ({student.age})</p>
                        <p>==============================</p>
                        <div style={{ display: "flex", alignItems: "center"}}>
                            <p style={{ whiteSpace: "pre"}}>Grades: </p>
                            {student.grades.map((grade, index) => 
                                <div key={index} style={{ whiteSpace: "pre"}}>
                                    {grade === undefined ? "*" : grade}
                                    {index < student.grades.length -1 ? ", " : ""}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>
  )
}

export default Challenge10