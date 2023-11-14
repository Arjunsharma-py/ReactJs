import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";

interface Logout {
  type: "LOGOUT";
}

interface Login {
  type: "LOGIN";
  username: string;
}

export type authAction = Login | Logout;

const authReducer = (user: string, action: authAction): string => {
  if (action.type === "LOGIN") return action.username;
  if (action.type === "LOGOUT") return "";
  return user;
};

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch: dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
