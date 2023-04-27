import React, { createContext, useState } from "react";

export const UsersContext = createContext();
export const DisplayContext = createContext();

export function ContextProvider(props) {
    const [users, setUsers] = useState([]);
    const value = { users, setUsers };
    const [screenView, setScreenView] = useState("add");
    const show = { screenView, setScreenView };

    return (
        <DisplayContext.Provider value={show}>
            <UsersContext.Provider value={value}>
                {props.children}
            </UsersContext.Provider>
        </DisplayContext.Provider>
    );
}
