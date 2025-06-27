import { useState, useEffect } from "react";

const Challenge17 = () => {

    const [results, setResults] = useState<string[]>([]);


    useEffect(() => {
        const add = (x: number, y: number): number => x + y;
        const substract = (x: number, y: number): number => x - y;
        const multiply = (x: number, y: number): number => x * y;
        const divide = (x: number, y: number): number => x / y;


        const applyOperation = (
            a: number,
            b: number,
            operation: (x: number, y: number) => number,
            label: string,
        ): string => {
            const result = operation(a, b)
            return `${label}: ${a} and ${b} -> ${result}`
        }

        const newResults = [
            applyOperation(1, 2, add, "Addition"),
            applyOperation(1,2, substract, "Substraction"),
            applyOperation(1,2, multiply, "Mulitplication"),
            applyOperation(1,2, divide, "Division"),
        ]

        setResults(newResults)
    })

  return (
    <>
        <div style={{ backgroundColor: "white", border: "2px solid black", borderRadius: "12px", padding: "12px", margin: "12px"}}>
            <p style={{ fontWeight: "bold"}}>
                Exercise 5: Higher-Order Functions
            </p>

            {results.map((result, index) => (
                <div key={index}>
                    {result}
                </div>
            ))}
        </div>
    </>
  )
}

export default Challenge17