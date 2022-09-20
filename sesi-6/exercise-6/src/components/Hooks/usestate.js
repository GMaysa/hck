import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0)
    return(
        <>
            {console.log(count)}
            Count: {count}
            <br />
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(prevC => prevC - 1)}>-</button>
            <button onClick={() => setCount(prevC => prevC + 1)}>+</button>
        </>
    )
}

export default Counter