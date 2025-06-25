import React from 'react'

const Challenge3 = () => {

    const extractNumber = (word: string): number =>Number(word.match(/\d/)?.[0] ?? Infinity);

    const orderByNumber = (input: string): string => {
    return input
        .trim()
        .split(" ")
        .sort((a, b) => extractNumber(a) - extractNumber(b))
        .join(" ");
    };

    const inputs = [
        "is2 Thi1s T4est 3a",
        "4of Fo1r pe6ople g3ood th5e the2",
    ];

  return (
    <>
        {inputs.map((input, index) => (
            <div key={index}>{orderByNumber(input)}</div>
        ))}
    </>
  )
}

export default Challenge3