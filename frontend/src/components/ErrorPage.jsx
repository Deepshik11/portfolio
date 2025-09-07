import React from 'react';
import error_img from "../assets/error.png";
import {NavLink} from "react-router-dom";
import '../styles/error.css'
 const ErrorPage = () => {
  return (
    <>
      <div className="row m-0 align-items-center justify-content-center vh-100">
        <div className="col-12 col-sm-8 col-lg-6 d-flex flex-column align-items-center justify-content-center p-3">
          <img src={error_img} alt="Error Image"  id="error-image" />
          <h1 className="h3 head text-center mt-3 mb-2">We Can't find the page you're looking for.</h1>
          <p className="mt-3 text-center text-white mb-4">Page not found.It may have been moved,renamed, or temporarily unavailable. <br />Please check the URL or go back home.</p>
          <NavLink to="/" id="home-button" className="px-5 py-2 rounded">Back to Home</NavLink>
        </div>
      </div>
    </>
  )
}
export default ErrorPage;

