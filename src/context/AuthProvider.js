import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';


// export AuthContext
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const allContexts = useFirebase();

    return (
        // Return allContexts Value
        <AuthContext.Provider value={allContexts}>
            {/* Children */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;