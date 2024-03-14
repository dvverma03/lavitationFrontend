import axios from "axios";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeInvoice } from "./utils/invoiceslice";

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  let downloadBtn = useRef();
  let addMoreBtn = useRef();
  let logoutBtn = useRef();

  function HandlePrint() {
    downloadBtn.current.style.display = "none";
    addMoreBtn.current.style.display = "none";
    logoutBtn.current.style.display = "none";
    window.print();
    downloadBtn.current.style.display = "block";
    addMoreBtn.current.style.display = "block";
    logoutBtn.current.style.display = "block";
  }

  function HandleLogout() {
    const token = document.cookie;
    const token1 = token.substring(6);
    axios
      .post("http://localhost:1234/logout", { token1 })
      .then((res) => alert("User logout successfully"))
      .catch((err) => console.log(err));
      function deleteCookie(name) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      }
      
      deleteCookie("token");
      
    navigate("/");
  }

  return (
    <>
      <div className="flex justify-between mx-8 my-4">
        <div>
          <div className="text-3xl font-bold">Invoice Generator</div>
          <div className="text-xl">Sample output should be this</div>
        </div>
        <div className="flex items-center">
          <div className="w-[60px] mx-[10px]">
            <img
              className="w-full"
              src="https://cdn6.aptoide.com/imgs/3/4/5/3451fd4570905fcd8c4d13f4fa5a3d7b_icon.png"
              alt=""
              srcSet=""
            />
          </div>
          <div>
            <div>Lavitation</div>
            <div>infotech</div>
          </div>
          <button
            type="button"
            ref={downloadBtn}
            onClick={HandlePrint}
            download={HandlePrint}
            className="bg-blue-500 mx-8 my-4 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Download
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="/form">
          <button
            type="submit"
            ref={addMoreBtn}
            className="bg-blue-500 mx-8 my-4 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Add More
          </button>
        </Link>
          <button
            type="submit"
            ref={logoutBtn}
            onClick={HandleLogout}
            className="bg-blue-500 mx-8 my-4 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Log Out
          </button>
      </div>
    </>
  );
};

export default Header;
