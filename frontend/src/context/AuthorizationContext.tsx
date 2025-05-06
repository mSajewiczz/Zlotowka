import { createContext, useState } from 'react';

export const AuthorizationContext = createContext({
  passedAuthorisation: false,
  userName: '',
  setAuth: (auth: { passedAuthorisation: boolean; userName: string }) => {},
});

const localAuth = localStorage.getItem("passedAuthorisation");
const  localUserName =  localStorage.getItem("userName");

const localData = () => {
  console.log(localAuth + " " + localUserName);
}


export function AuthorizationContextProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState({
    passedAuthorisation: localAuth,
    userName: localUserName,
  });

  localData();
//localstorage is to do 

  return (
    <AuthorizationContext.Provider value={{ ...auth, setAuth }}>
      {children}
    </AuthorizationContext.Provider>
  );
}
