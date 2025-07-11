import { useEffect, useState } from 'react'
import { users } from '../inputData';
  
const Challenge1 = () => {
  const [userResults, setUserResults] = useState<Record<string, string[]>>({});

  useEffect(() => {
    const results: Record<string, string[]> = { online: [], offline: [], away: [] };

    users.forEach((user) => {
      user.status === "offline"
        ? results.offline.push(user.username)
        : user.lastActivity > 10
        ? results.away.push(user.username)
        : results.online.push(user.username)
    });

    Object.keys(results).forEach((key) => {
      if (results[key].length === 0) {
        delete results[key];
      }
    });

    setUserResults(results);
  }, []);

  return (
    <>
    <p>
        Challenge 1:
    </p>
      {Object.entries(userResults).map(([status, users]) => (
        <div key={status}>
            <strong>{status}:</strong>
                {users.map(user => (
                  <div key={user}>{user}</div>
                ))}
        </div>
      ))}
    </>
  )

}

  export default Challenge1