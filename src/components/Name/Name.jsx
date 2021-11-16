import { useName } from "../../hooks/useName";

export const Name = () => {

    const { name, setName } = useName()

    return (
        <>
            <input type="text" onChange={(e => setName(e.target.value))} />
            <span>{name}</span>
        </>

    );
}