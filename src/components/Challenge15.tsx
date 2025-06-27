const Challenge15 = () => {
    const getLength = (input: string | number): number => {
        return typeof input === "string" ? input.length : input;
    }

    const messageString: string = "Testnachricht";
    const messageNumber: number = 13;

  return (
    <>
        <div style={{ backgroundColor: "white", border: "2px solid black", borderRadius: "12px", padding: "12px", margin: "12px"}}>
            <p style={{ fontWeight: "bold"}}>
                Exercise 3: Type Assertions
            </p>
            <div style={{ display: "flex", flexDirection: "row", gap: "12px"}}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1px", border: "2px solid black", padding: "6px"}}>
                    <div>
                        {`String: ${messageString}`}
                    </div>
                    <div>
                        Länge: {getLength(messageString)}
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1px",  border: "2px solid black", padding: "6px"}}>
                    <div>
                        {`Zahl: ${messageNumber}`}
                    </div>
                    <div>
                        Länge: {getLength(messageNumber)}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Challenge15