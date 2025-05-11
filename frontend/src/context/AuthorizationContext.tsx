import { createContext, useState } from 'react';
import { DataContext } from './DataContext';


export const AuthorizationContext = createContext({
  passedAuthorisation: false,
  userName: '',
  setAuth: (auth: { passedAuthorisation: boolean; userName: string }) => {},
});

const localAuth = localStorage.getItem("passedAuthorisation");
const  localUserName =  localStorage.getItem("userName");

export function AuthorizationContextProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState({
    passedAuthorisation: localAuth,
    userName: localUserName,
  });


  return (
    <AuthorizationContext.Provider value={{ ...auth, setAuth }}>
      {children}
    </AuthorizationContext.Provider>
  );
}
