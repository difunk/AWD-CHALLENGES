const Challenge12 = () => {

const matrix: number[][] = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
];

 const snail = (matrix: number[][]): number[] => {
    const result: number[] = [];
    const matrixDuplicate = matrix.map(row => [...row])

    while (matrixDuplicate.length > 0){
        const topRow = matrixDuplicate.shift()

        if (topRow && topRow.length > 0) {
            result.push(...topRow)
        }

        const rightColumn = matrixDuplicate.map(row => row.pop()).filter(v => v !== undefined)

        if (rightColumn && rightColumn.length > 0) {
            result.push(...rightColumn)
        }

        const bottomRow = matrixDuplicate.pop()

        if (bottomRow && bottomRow.length > 0){
            bottomRow.reverse();
            result.push(...bottomRow)
        }

        const leftColumn = matrixDuplicate.map(row => row.shift()).filter(v => v !== undefined);
        if (leftColumn && leftColumn.length > 0) {
                result.push(...leftColumn)
        }
    }
    return result;
 }


  const snailResult = snail(matrix);

  return (
    <>
        <div style={{ backgroundColor: "white", border: "2px solid black", borderRadius: "12px", padding: "12px", margin: "12px"}}>
            <p style={{ fontWeight: "bold"}}>
                Snail Sort
            </p>
                {matrix.map((row, i) => (
                    <p key={i}>[{row.join(", ")}]</p>
                ))}

            <div>
                Result:
                <p>{snailResult.join(", ")}</p>
            </div>
        </div>

    </>
  )
}

export default Challenge12