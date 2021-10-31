import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeFirebase from '../Firebase/Firebase.Init';

// initializeFirebase Declear
initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // const signInUsingGoogle = () => {
    //     return signInWithPopup(auth, googleProvider)
    // }
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    // Log Out 
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    // AuthStateChanged
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser(user);
            }

        });
    }, [])

    // Return useFireBase
    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading,
        setIsLoading
    }
};

export default useFirebase;