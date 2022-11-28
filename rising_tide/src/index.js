import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from "./components/navbar.component";
import Journal from "./components/journal.component";
import WeeklyView from "./components/weeklyView.component";
import ArchivePage from "./components/archivePage.component";
import SignIn from "./components/signInPage.component";
import SignUp from "./components/signUpPage.component";
import Footer from "./components/footer.component";
import Help from "./components/help.component";
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

//Put app above navbar if anything turns out wrong

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

    <Navbar />
    
    <Routes>
      <Route path = "/" element={<Journal />}></Route>
      <Route path = "/weeklyView" element={<WeeklyView />}></Route>
      <Route path = "/archivePage" element={<ArchivePage />}></Route>
      <Route path = "/signInPage" element={<SignIn />}></Route>
      <Route path = "/signUpPage" element={<SignUp />}></Route>
      <Route path = "/helpPage" element={<Help />}></Route>
    </Routes>

    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
