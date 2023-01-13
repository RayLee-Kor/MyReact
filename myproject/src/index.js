import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MainPage from "./pages/MainPage"
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // BrowerRouter 적용
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
);
