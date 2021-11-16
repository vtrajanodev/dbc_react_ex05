import { createContext } from "react";
import { useState } from "react";

export const NameContext = createContext()

export const NameContextProvider = ({ children }) => {

    const [name, setName] = useState('Seu nome aparecerá aqui')

    return (
        <NameContext.Provider value={{name, setName}}>
            {children}
        </NameContext.Provider>
    );
}

