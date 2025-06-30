


// Generic Identity Function
function identity<T>(arg: T): T {
  return arg;
}

// Generic Array Function
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

// Generic Interface
interface Box<T> {
    value: T;
}

const numberBox: Box<number> = { value: 42};


// Generic Constraint
function printLength<T extends {length: number}>(item: T): number {
    console.log(item.length)
    return item.length;
}

printLength("hello")
printLength([1, 2, 3])

// Using Multiple Type Parameters
function createPair<T, V>(key: T, value: V): [T, V] {
    return [key, value];
}

const result = createPair<string, number>("age", 30);
console.log(result)


// Generic with Default Type
function wrapValue<T = string>(val: T = "" as T): T[] {
    return [val]
}

const defaultWrapped = wrapValue(); 
const numberWrapped= wrapValue(12); 


// Generic Utility Type
type Todo = {
  title: string;
  completed: boolean;
};

type PartialTodo = Partial<Todo>;


// Conditional Type with Generics
type TypeCheck<T> = T extends string ? string : number;
type A = TypeCheck<'hello'>;
type B = TypeCheck<42>;



const Challenge21 = () => {

  return (
    <>
        <div style={{ backgroundColor: "white", border: "2px solid black", borderRadius: "12px", padding: "12px", margin: "12px"}}>

            <div style={{ marginBottom: "12px"}}>
                <p style={{ fontWeight: "bold"}}>
<<<<<<< HEAD
                    TypeScript Generics Exercises
                </p>
=======
                    Generic Identity Function
                </p>
                <div>

                </div>
>>>>>>> origin/main
            </div>
        </div>
    </>
  )
}

export default Challenge21