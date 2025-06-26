import React from 'react'

const Challenge7 = () => {
    let n: number = 5;
    let counter: number = 1;
    const treeRows: string[] = [];

    for (let i = 1; i <= n; i++) {
        const row = " ".repeat(n - i) + "*".repeat(counter)
        treeRows.push(row);
        console.log(row);
        counter += 2;
    }

  return (
    <>
        <div style={{ backgroundColor: "white", border: "2px solid black", borderRadius: "12px", padding: "12px", margin: "12px" }}>
            <p style={{ fontWeight: "bold"}}>
                Coding: Tree
            </p>
            <pre>
                {treeRows.map((row, index) => <div key={index}>{row}</div>)}
            </pre>
        </div>
    </>
  )
}

export default Challenge7