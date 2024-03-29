import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import BookDetails from "./components/BookDetails/BookDetails";
import ForgetPassword from './components/ForgotPassword/ForgetPassword';
import VerifyPassword from './components/ForgotPassword/VerifyPassword';
import ResetPassword from './components/ForgotPassword/ResetPassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>

        <Route path = "/" element = {<Home />}>
          <Route path = "/login" element = {<Login />} />
          <Route path = "/forgotpassword" element = {<ForgetPassword />} />
          <Route path = "/verifypassword" element = {<VerifyPassword />} />
          <Route path = "/resetpassword" element = {<ResetPassword />} />
          
          <Route path = "/about" element = {<About />} />
          <Route path = "/register" element = {<Register />} />
          <Route path = "/book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

