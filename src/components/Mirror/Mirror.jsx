import { useCounter } from "../../hooks/useCounter";
import { useName } from "../../hooks/useName";

export const Mirror = () => {

    const { counter } = useCounter()
    const { name } = useName()
    return (
        <>
            <p>Espelho: { counter }</p>
            <p>Nome: { name }</p>
        </>
    );      
}