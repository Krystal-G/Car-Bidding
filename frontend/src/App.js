// import './App.css';
// import React from 'react';
// import HomePage from './pages/HomePage/HomePage';
// import CorporateAccountsLandingPage from './pages/CorporateAccounts/CorporateAccountsLandingPage';
// function App() {
//   // const {} = React.useContext(MainContext);
//   return (
//     <HomePage/>
//     //<CorporateAccountsLandingPage/>
// =======
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserInfo from "./pages/UserInfo";
import Auth from "./pages/Auth";
import CorporateAccountAuth from "./pages/CorporateAccountAuth";
import CorporateAccountsLandingPage from "./pages/CorporateAccounts/CorporateAccountsLandingPage.js";
import CorporateAdmin from "./pages/CorporateAdmin.js";
import HomePage from "./pages/HomePage/HomePage.js";

function App() {
  // const {} = React.useContext(MainContext);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/corpac" element={<CorporateAccountsLandingPage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/corpacauth" element={<CorporateAccountAuth />} />
        <Route path="/corpadmin" element={<CorporateAdmin />} />
        <Route path="/userinfo" element={<UserInfo />} />
      </Routes>
    </Router>
  );
}

export default App;