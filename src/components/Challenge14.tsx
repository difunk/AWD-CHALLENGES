import type { Account } from '../types/Account'
import { accounts } from '../accountData'

const Challenge14 = () => {
    const isActive = (account: Account): boolean => {
        return account.status === "active" ? true : false;
    }

  return (
    <>
        <div style={{ backgroundColor: "white", border: "2px solid black", borderRadius: "12px", padding: "12px", margin: "12px"}}>
            <p style={{ fontWeight: "bold"}}>
                Exercise 2: Union Types and Optional Properties
            </p>
            {accounts.map((account) => 
                <div key={account.username}>
                    {account.username}: {isActive(account) ? "Active" : "Inactive or Pending"}
                </div>
            )}
        </div>
    </>
  )
}

export default Challenge14