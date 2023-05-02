import React, { useState, useContext } from "react";

//creamos el contexto 
export const MyContext = React.createContext();

//componente que provee el contexto
export const MyProvider = (props) => {
    const [item, setItem] = useState({amount: 0, price: 0, name: ''});
    const insertItem =(newItem) => setItem(newItem);
    const contextValue = { item, insertItem };

    return(
        <MyContext.Provider value={contextValue}>
            {props.children}
        </MyContext.Provider>
    )
}