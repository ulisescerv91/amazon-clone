import React, { createContext, useContext, useReducer } from "react";

/**
 * IMPLEMENT REACT CONTEXT
 * Step 1: Create this file and  check the next step on index.js
 */

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);