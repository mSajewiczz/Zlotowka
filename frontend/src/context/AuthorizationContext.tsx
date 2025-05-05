import { createContext, useState } from 'react';

export const AuthorizationContext = createContext({
  passedAuthorisation: false,
  userName: '',
  setAuth: (auth: { passedAuthorisation: boolean; userName: string }) => {},
});

export function AuthorizationContextProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState({
    passedAuthorisation: false,
    userName: '',
  });

  return (
    <AuthorizationContext.Provider value={{ ...auth, setAuth }}>
      {children}
    </AuthorizationContext.Provider>
  );
}
