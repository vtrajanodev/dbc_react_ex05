import { useContext } from "react";
import { NameContext } from "../context/NameContext";

export const useName= () => {
    const myName = useContext(NameContext)

    return myName
}