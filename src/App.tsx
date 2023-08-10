import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import FinancingEntity from "./routes/Routes";
import AuthContainer from "./components/Auth/AuthContainer";
import HeaderBar from "./components/Header/HeaderBar";
import Footer from "./components/Footer/Footer";

function App() {
  const routes = [...FinancingEntity];
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
      <Footer />
    </div>
  );
}

export default App;
