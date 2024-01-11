// import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
// import { useQuery } from "react-query";
import { Navigate, useNavigate } from "react-router-dom";

export default function ForgetPassword() {
  let emailInput = useRef();
  let codeInput = useRef();
  let currentInput = useRef();
  let passInput = useRef();
  let rePassInput = useRef();
  let [mainData,setMainData]=useState(null)
  let [err,setErr]=useState(null)
  let [code,setCode]=useState(null)
 
  function sub() {
    forget(emailInput.current.value);
  }

let navigate=useNavigate()

    async function forget(value) {
    try{
    // let {data}= await axios.post(
      // "",
      // {
        // email:value,
    // }

    // )
    // setMainData(data)
    navigate('/verifypassword') 
// console.log(data);
  }
  catch(error){
    setErr(error.response.data.message);
    // console.log(error);

    }
  
}//end

  return (
    <div className="login-container  w-100 top-0">
    <form className="login-form">
        <h4 htmlFor="forget">* Enter your email</h4>
      <input ref={emailInput} name="forget" type="text" className="form-control forgotInput" placeholder="Your email.." />
      <button  className='btn ' onClick={sub}>Send</button>
    </form>
  </div>
  
  );
}
