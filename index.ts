type InputType = (number | string)[];
type OutputType = (number | string);

function gerFirstElement(arr: InputType): OutputType {
    return arr[0];
}
function getFirstItem<T>(arr: T[]) {
    // Generic that will identify the type automatically 
    return arr[0];
}

function swap<X>(a: X, b: X): [X, X] {
    return [b, a]
}

// using arrow function 
const swap2 = <T>(a: T, b: T): [T, T] => {
    return [b, a]
}
// swap if a is string and b is number or vise versa
function swapGenericType<X, U>(a: X, b: U): [U, X] { // return is swaped type
    return [b, a]
}

let ans = gerFirstElement([1, 2, 3]);
let ans2 = gerFirstElement(["one", "two", "three"])

let ans3 = getFirstItem([1, 2, 3]);
let ans4 = getFirstItem(["one", "two", "three"])

console.log(ans);
console.log(ans2);

console.log(ans3 * 10)
console.log(ans4.toUpperCase())

console.log(swap(1, 2))
console.log(swap("sas", "pas"))

console.log(swapGenericType(1, "second"))
console.log(swapGenericType("First", 2))



// generics
//partials


interface Todo {
    title: string
    description: string
    id: number
    done: boolean
}

type UpdateTodoInput = Partial<Todo>

function updateTodo(id: number, newProp: UpdateTodoInput) {
    // server code 
}

// call functions to see partial working
updateTodo(1, { description: "newTitle" })