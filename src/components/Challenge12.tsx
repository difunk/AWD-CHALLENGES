import React, { useEffect, useState } from "react";

const Challenge12 = () => {

    const matrix: number[][] = [
        [1, 2, 3], 
        [4, 5, 6], 
        [7, 8, 9]
    ];

    const bigMatrix: number[][] = [
    [ 1,  2,  3,  4,  5,  6],
    [ 7,  8,  9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36],
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

            const leftColumn = matrixDuplicate.map(row => row.shift()).filter(v => v !== undefined).reverse();
            if (leftColumn && leftColumn.length > 0) {
                    result.push(...leftColumn)
            }
        }
        return result;
    }

    const [step, setStep] = useState(0);
    const result = snail(bigMatrix);

useEffect(() => {
  if (step < result.length - 1) {
    const timer = setTimeout(() => setStep(step + 1), 250);
    return () => clearTimeout(timer);
  } else {
    const timer = setTimeout(() => setStep(0), 500);
    return () => clearTimeout(timer);
  }
}, [step, result.length]);

  return (
    <>
        <div style={{ backgroundColor: "white", border: "2px solid black", borderRadius: "12px", padding: "12px", margin: "12px"}}>
            <p style={{ fontWeight: "bold"}}>
                Snail Sort Visualized
            </p>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${bigMatrix[0].length}, 40px)`, gap: "8px"}}>
                {bigMatrix.flat().map((number, index) => {
                      const currentNumber = result[step];
                      const isActive = number === currentNumber;

                      return (
                        <div 
                            key={index}
                            style={{
                                width: 40,
                                height: 40,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                border: "1px solid gray",
                                fontWeight: "bold",
                                backgroundColor: isActive ? "yellow" : "white",
                            }}
                            >
                                {number}
                        </div>
                      )
 
                })}
            </div>
        

            <div>
                Result:
                <p>{result.join(", ")}</p>
            </div>
        </div>

    </>
  )
}

export default Challenge12