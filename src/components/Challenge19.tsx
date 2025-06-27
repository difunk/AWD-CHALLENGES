import type { Profile } from "../types/Profile"

const Challenge19 = () => {
    const profiles: Profile[] = [
    {
        contact: {
        email: "alice@example.com",
        },
    },
    {
        // empty
    },
    {
        contact: {
        email: "",
        },
    },
    ];

    const getEmail = (profile: Profile): string => {
        const email = profile.contact?.email;
        return email?.trim() ? email : "No email provided";
    }

  return (
    <>
        <div style={{ backgroundColor: "white", border: "2px solid black", borderRadius: "12px", padding: "12px", margin: "12px"}}>
            <p style={{ fontWeight: "bold"}}>
                Exercise 7: Optional Chaining and Nullish Coalescing (Bonus)
            </p>
            <div>
                {profiles.map((profile, index) => (
                    <div key={index}>{getEmail(profile)}</div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Challenge19