import { useContext } from "react";
import { CounterContext } from "../components/context/CounterContext";

export const useCounter = () => {
    const myCounter = useContext(CounterContext)

    return myCounter
}