import { createContext } from 'react';

export const AuthorizationContext = createContext({
    passedAuthorisation: false,
    userName: ""
});