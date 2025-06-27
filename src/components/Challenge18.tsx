import type { Shape } from "../types/Shapes";

const Challenge18 = () => {

    const square: Shape = {
        kind: "square",
        size: 5,
    };

    const rectangle: Shape = {
        kind: "rectangle",
        width: 4,
        height: 6,
    };

    const getArea = (shape: Shape): number => {
        return shape.kind == "rectangle" ? shape.width * shape.height : shape.size * shape.size
    }

  return (
    <>
        <div style={{ backgroundColor: "white", border: "2px solid black", borderRadius: "12px", padding: "12px", margin: "12px"}}>
            <p style={{ fontWeight: "bold"}}>
                Exercise 6: Combining Interfaces and Union Types
            </p>
            <div>
                <p>Quadratfläche: {getArea(square)}</p>
                <p>Rechteckfläche: {getArea(rectangle)}</p>
            </div>
        </div>
    </>
  )
}

export default Challenge18