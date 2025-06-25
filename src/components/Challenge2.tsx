  
const Challenge2 = () => {
    const maskify = (input: string): string => {
        if (input.length <= 4) return input;
        const hiddenInput = input.slice(-4);
        const maskedInput = input.slice(0, -4).replace(/./g, "#");
        return maskedInput + hiddenInput;
    }

    const inputs = [
        "4556364607935616",
        "64607935616",
        "1",
        "",
        "Skippy",
        "Nananananananananananananananana Batman!"
    ];

  return (
    <>
        {inputs.map((input, index) => (
        <div key={index}>
            {maskify(input) === "" ? 
            <span>(empty)</span> 
            : maskify(input)}
        </div>
        ))}
    </>
  )

}

  export default Challenge2