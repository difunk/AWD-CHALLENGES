import type { StringMap } from "../types/StringMap"
import { stringMap } from "../stringMapData"

const Challenge16 = () => {
    const printValues = (obj: StringMap) => {
        for(const key in obj){
            console.log(`${key}: ${obj[key]}`)
        }

        return Object.entries(obj).map(([key, value]) => (
            <div key={key}>
                <strong>{key}:</strong> {value}
            </div>
        
        ))
    }

  return (
    <>
        <div style={{ backgroundColor: "white", border: "2px solid black", borderRadius: "12px", padding: "12px", margin: "12px"}}>
            <p style={{ fontWeight: "bold"}}>
                Exercise 4: Index Signatures
            </p>
            <div>
                {printValues(stringMap)}
            </div>
        </div>
    </>
  )
}

export default Challenge16