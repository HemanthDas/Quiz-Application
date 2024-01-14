import React, { createContext, useCallback, useMemo } from "react";
import Cookies from "js-cookie";
interface AuthContextInterface {
  user: {
    isLogged: boolean;
    user: string;
  };
  createUser: (user: string) => void;
  deleteUser: () => void;
}
export const AuthContext = createContext<AuthContextInterface>({
  user: {
    isLogged: false,
    user: "",
  },
  createUser: () => {},
  deleteUser: () => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const userCookie = Cookies.get("user");
  const [user, setUser] = React.useState(
    userCookie
      ? {
          isLogged: true,
          user: userCookie,
        }
      : {
          isLogged: false,
          user: "",
        }
  );

  const createUser = useCallback((user: string) => {
    Cookies.set("user", user);
    setUser({
      isLogged: true,
      user: user,
    });
    window.location.reload();
  }, []);
  const deleteUser = useCallback(() => {
    Cookies.remove("user");
    setUser({
      isLogged: false,
      user: "",
    });
    window.location.reload();
  }, []);
  const values = useMemo(() => {
    return {
      user,
      createUser,
      deleteUser,
    };
  }, [user, createUser, deleteUser]);
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
