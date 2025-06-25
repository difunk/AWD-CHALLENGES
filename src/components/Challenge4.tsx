  
const Challenge4 = () => {
  
    const findMissingLetter = (input: string[]): string => {
        const alphabet = input[0] === input[0].toUpperCase()
        ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        : 'abcdefghijklmnopqrstuvwxyz';

        const indexOfFirstCharacter = alphabet.indexOf(input[0]);

        let missing = '';

        input.forEach((char, index) => {
            if (char !== alphabet[indexOfFirstCharacter + index] && missing === '') {
                missing = alphabet[indexOfFirstCharacter + index];
            }
        });

        return missing;
    };


    const inputs = [
        ['a','b','c','d','f'],
        ['O','Q','R','S']
    ];

  return (
    <>
        {inputs.map((input, index) => (
            <div key={index}>
                {"["}{input.join(", ")}{"] =>"}{findMissingLetter(input)}
            </div>
        ))}
    </>
  )

}

  export default Challenge4