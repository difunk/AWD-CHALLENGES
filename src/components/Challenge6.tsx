import React, { use } from 'react'

const Challenge6 = () => {
    // Step 1
    const age: number = 18;

    // Step 4
    const score: number = 0;

    // Step 7
    const username: string = "";

    // Step 10
    const isAdmin: boolean = false;
    
    // Step 2
    const numbers = [];
    for (let i = 1; i <= age; i++) {
        numbers.push(i);
    }

    // Step 3
    const ageMessage = age > 18 ? "18+" : "Under 18";

    // Step 5
    const scoreAvailable = score > 0 ? "Score is available." : "";

    // Step 6
    const scoreTruthy = score ? "Score is evaluated as truthy." : "Score is evaluated as falsy.";

    // Step 8
    const usernameAvailable = username ? "Username is available." : "";

    // Step 9
    const usernameFalsy = !username ? "Username is evaluated as falsy." : "";

    // Step 11
    const isAdminTruthy = isAdmin ? "isAdmin is evaluated as truthy." : "";

    // Step 12
    const isAdminFalse = !isAdmin ? "isAdmin is false." : "";

  return (
    <>
        <div style={{ backgroundColor: "white", border: "2px solid black", borderRadius: "12px", padding: "12px", margin: "12px" }}>
            <p style={{ fontWeight: "bold"}}>
                Coding: TypeScript Basics 
            </p>
            {/* Step 2 */}
            {numbers.join(', ')} <br />

            {/* Step 3 */}
            {ageMessage} <br />

            {/* Step 5 */}
            {scoreAvailable && (<>{scoreAvailable} <br /></>)}

            {/* Step 6 */}
            {scoreTruthy} <br />

            {/* Step 8 */}
            {usernameAvailable && (<>{usernameAvailable} <br /></>)}

            {/* Step 9 */}
            {usernameFalsy && (<>{usernameFalsy} <br /></>)}

            {/* Step 11 */}
            {isAdminTruthy && (<>{isAdminTruthy} <br /></>)}

            {/* Step 12 */}
            {isAdminFalse}
        </div>
    </>
  )
}

export default Challenge6