import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { FinancingEntityRoutes, CreditCardRoutes } from "./routes/Routes";
import AuthContainer from "./components/Auth/AuthContainer";
import HeaderBar from "./components/Header/HeaderBar";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  const routes = [...FinancingEntityRoutes, ...CreditCardRoutes];
  // const logo = require("./logo.svg") as string;
  return (
    <div className="App">
      <HeaderBar />
      <main>
        <Routes>
          <>
            {/* <Route path='/login' element={<LoginPage />} /> */}
            {routes.map(({ element, path }) => (
              <Route
                key={path}
                path={path}
                element={<AuthContainer children={element} />}
              />
            ))}
          </>
        </Routes>
      </main>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
      />
      <Footer />
    </div>
  );
}

export default App;
