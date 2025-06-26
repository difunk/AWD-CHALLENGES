const Challenge9 = () => {
    const list: number[] = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];
    const sortedDescending = list.slice().sort((a, b) => a - b);
    const squaredNumbers = sortedDescending.map(number => Math.pow(number, 2));
    const trimmedList = squaredNumbers.slice(2, -4);
    const filteredList = trimmedList.filter((number) => number % 4 !== 0)
    const totalSum = filteredList.reduce((a, b) => a + b)

  return (
    <>
        <div style={{ backgroundColor: "white", border: "2px solid black", borderRadius: "12px", padding: "12px", margin: "12px"}}>
            <p style={{ fontWeight: "bold"}}>
                Coding: Array Functions
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "20px", marginTop: "12px" }}>
                <div><strong>Sorted Descending</strong>{sortedDescending .map((number, index) => <div key={index}>{number}</div>)}</div>
                <div><strong>Squared Numbers</strong>{squaredNumbers.map((number, index) => <div key={index}>{number}</div>)}</div>
                <div><strong>Trimmed List</strong>{trimmedList.map((number, index) => <div key={index}>{number}</div>)}</div>
                <div><strong>Not Divisible by 4</strong>{filteredList.map((number, index) => <div key={index}>{number}</div>)}</div>
                <div><strong>Total Sum</strong>{<div>{totalSum}</div>}</div>
            </div>
        </div>
    </>
  )
}

export default Challenge9