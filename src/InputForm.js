import React, { useState } from "react";
import { addInvoice } from "./utils/invoiceslice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const InputForm = () => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rate, setRate] = useState("");
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store)
  const userId=user?.userId

  const calculateTotal = (e) => {
    e.preventDefault();

    if (quantity && rate) {
      const calculatedTotal = parseInt(quantity) * parseInt(rate);
      setTotal(calculatedTotal);
      setError(null); 
    } else {
      setTotal("Please enter both quantity and rate");
      setError("Please fill in all fields");
    }
  };


  const HandleInvoice = () => {
  
    if (!product || !quantity || !rate || total === "Please enter both quantity and rate") {
      setError("Please fill in all fields");
    } else {
      
      const invoiceData={ product, quantity, rate, total, userId}
      dispatch(addInvoice(invoiceData));
      axios.post('http://localhost:1234/add-invoice', invoiceData)
        .then(response => {
          console.log("Invoice added successfully to the database:", response.data);
        })
        .catch(error => {
          console.error("Error adding invoice to the database:", error);
        });

      navigate("/invoice");
    }
  };

  const CancelInvoice=()=>{
    navigate("/invoice")
  }

  return (
    <div className="flex justify-center mt-8">
      <form
        className="w-2/3 p-8 border border-black rounded-lg bg-white"
        onSubmit={calculateTotal}
      >
        <div className="text-3xl font-bold text-center mb-6">Fill your invoice</div>
        <div className="flex flex-col mb-4">
          <label htmlFor="product" className="mb-2 text-sm">
            Product Name:
          </label>
          <input
            id="product"
            type="text"
            placeholder="Product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="quantity" className="mb-2 text-sm">
            Quantity:
          </label>
          <input
            id="quantity"
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="rate" className="mb-2 text-sm">
            Rate:
          </label>
          <input
            id="rate"
            type="number"
            placeholder="Rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Calculate Total
        </button>
        <div className="mt-4">Total: {total}</div>
        {error && <div className="text-red-500 mt-2">{error}</div>}
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 mx-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            onClick={HandleInvoice}
          >
            Add Invoice
          </button>
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            onClick={CancelInvoice}
          >
            Cancel Invoice
          </button>
        </div>
        
      </form>
    </div>
  );
};

export default InputForm;
