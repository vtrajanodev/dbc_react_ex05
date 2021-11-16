import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { NameContext } from "../context/NameContext";

export const Mirror = () => {

    const { counter } = useContext(CounterContext)
    const { name } = useContext(NameContext)
    return (
        <>
            <p>Espelho: { counter }</p>
            <p>Nome: { name }</p>
        </>
    );      
}