// setup data layer
// we need this to track the basket

import React from 'react'
import { createContext, useContext, useReducer } from "react";

// This is the Data Layer
export const StateContext = createContext();

//Build a provider


const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
        )
}

export const useStateValue = () => useContext(StateContext);
export default StateProvider;
