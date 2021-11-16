import { useCounter } from "../../hooks/useCounter";

export const Counter = () => {

    const {counter, setCounter }  = useCounter()

    return (
        <div>
            <p>Contador: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Incrementer</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    );
}