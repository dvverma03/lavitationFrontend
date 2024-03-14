import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InputForm from './InputForm';
import InvoiceGen from './InvoiceGen';
import Register from './register';
import Login from './login';

const Invoice = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/invoice" element={<InvoiceGen />} />
        <Route path="/form" element={<InputForm />} />
      </Routes>
    </Router>
  );
};

export default Invoice;
