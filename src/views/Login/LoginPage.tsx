import React from "react";
import { useParams } from 'react-router-dom';
function LoginPage() {
    const urlParams = useParams();
    console.log(urlParams);
  return (
  <div>Login</div>
  );
}

export default LoginPage;
