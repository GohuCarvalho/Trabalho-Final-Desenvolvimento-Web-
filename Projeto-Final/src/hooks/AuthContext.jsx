import React, {createContext, useContext} from "react";
import {Api} from '../services/Api'

const ApiContext = createContext(null);

export const ApiProvider = ({children}) => {
    return(
        <ApiContext.Provider value ={Api}>
            {children}
        </ApiContext.Provider>
    );
};

export const useApi = () =>{
    const contexto = useContext(ApiContext);

    return contexto;
}

// talvez teremos que fazer um Error aqui... -> joão