import React, {createContext, useEffect} from 'react';
import {onAuthStateChanged} from "firebase/auth";

export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState(false);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])
    if (user === null) return <p>Loading...</p>
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;