import type { SuperUser } from '../types/SuperUser';
import { superUser } from '../userData';

const Challenge13 = () => {
  const getUserInfo = (user: SuperUser): string => {
    const userString = `User ${user.id}: ${user.name} (${user.email})`;
    return userString;
  }

  return (
    <>
        <div style={{ backgroundColor: "white", border: "2px solid black", borderRadius: "12px", padding: "12px", margin: "12px"}}>
            <p style={{ fontWeight: "bold"}}>
                Exercise 1: Basic Types and Interfaces
            </p>
            <div>
              {superUser.map((user) => 
                <div>{getUserInfo(user)}</div>
              )}
            </div>

        </div>
    </>
  )
}

export default Challenge13