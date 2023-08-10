import React, { ReactNode } from "react";
import LoginPage from "../../views/Login/LoginPage";

interface Props {
  children: ReactNode;
}

const AuthContainer: React.FC<Props> = ({ children }) => {
  const isAuth = true;
  return isAuth ? <>{children}</> : <LoginPage />;
};

export default AuthContainer;
