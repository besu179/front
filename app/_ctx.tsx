import { createContext, useContext, type PropsWithChildren } from 'react';
import { useStorageState } from './_useStorageState';

// Context allows us to pass data deep into the component tree 
// without manually passing props at every level.
const AuthContext = createContext<{
    signIn: () => void;
    signOut: () => void;
    session?: string | null;
    isLoading: boolean;
}>({
    signIn: () => null,
    signOut: () => null,
    session: null,
    isLoading: false,
});

// Custom hook to make it easier to access the AuthContext from any component.
export function useSession() {
    const value = useContext(AuthContext);
    if (process.env.NODE_ENV !== 'production') {
        if (!value) {
            throw new Error('useSession must be wrapped in a <SessionProvider />');
        }
    }
    return value;
}

// Result: Wraps the app and provides the session state to all children.
export function SessionProvider({ children }: PropsWithChildren) {
    // useStorageState is a custom hook that persists the session token in secure storage.
    const [[isLoading, session], setSession] = useStorageState('session');

    return (
        <AuthContext.Provider
            value={{
                signIn: () => {
                    // In a real app, you would send credentials to your backend here.
                    // On success, you get a token and save it.
                    setSession('xxx-mock-token-xxx');
                },
                signOut: () => {
                    setSession(null);
                },
                session,
                isLoading,
            }}>
            {children}
        </AuthContext.Provider>
    );
}
