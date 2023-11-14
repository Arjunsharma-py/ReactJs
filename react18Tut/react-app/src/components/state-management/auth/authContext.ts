import React, { Dispatch } from "react";
import { authAction } from "./AuthProvider";

interface UserContextType {
  user: string;
  dispatch: Dispatch<authAction>;
}

const AuthContext = React.createContext<UserContextType>({} as UserContextType);

export default AuthContext;
