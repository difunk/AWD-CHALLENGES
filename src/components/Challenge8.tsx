const Challenge8 = () => {
    const numbers: number[] = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];
    const words: string[] = ["apple", "banana", "car", "dog", "elephant", "flower", "guitar", "house", "island", "jungle"];

  return (
    <>
        <div style={{ backgroundColor: "white", border: "2px solid black", borderRadius: "12px", padding: "12px", margin: "12px"}}>
            <p style={{ fontWeight: "bold"}}>
                Coding: TypeScript
            </p>
            <p>Zahlen: {numbers.join(', ')}</p>
            <p>Buchstaben: {words.join(', ')}</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginTop: "12px" }}>
                <div><p style={{ fontWeight: "bold"}}>Alle Zahlen verdoppelt: </p>{numbers.map((number) => <div>{`${number}*2 = ${number*2}`}</div>)}</div>
                <div><p style={{ fontWeight: "bold"}}>Wörter mit mehr als 5 Buchstaben: </p>{words.filter(word => word.length > 5).map(word => <div key={word}>{word}</div>)}</div>
                <div><p style={{ fontWeight: "bold"}}>Gesamtmenge: </p> {numbers.reduce((accumulator, number) => accumulator + number)}</div>
                <div><p style={{ fontWeight: "bold"}}>Mind. 1 Zahl über 10: </p>{numbers.some((number) => number > 10) ? "Ja" : "Nein"}</div>
            </div>
        </div>
    </>
  )
}

export default Challenge8