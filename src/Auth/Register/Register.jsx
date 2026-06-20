
import axios from "axios";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import {schema} from './Schema'
import { useState } from "react";


function Register() {

    const[error,seterror]=useState([]); 
   
      // هان استخدمنا مكتبة useForm
  const { register,handleSubmit,formState: { errors ,isSubmitting }}=useForm({
     resolver: yupResolver(schema),
  });
  
  //   هان عملت function يلي بتستقبل ال data
  const registerform= async(data)=>{
        try {
    const response = await axios.post(
      `${import.meta.env.VITE_BURL}/auth/Account/Register`,
      data
    );

    console.log(response.data);
  } catch (err) {
    seterror(err.response.data.errors)
    console.log(err.response.data.errors)
  }
  }
   

  return (


    <>
     {/* هان عملت تنسيق بسيط لل form  */}

     <div className="min-h-screen flex items-center justify-center">
      
    <form
      onSubmit={handleSubmit(registerform)}
      className="w-full max-w-md bg-white p-6 rounded-lg shadow-md flex flex-col gap-4"
    >

       
      
      <h2 className="text-2xl font-bold text-center">Register</h2>

      <input
        type="text"
        placeholder="User Name"
        {...register("userName")}
        className="border p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
      />


      {errors.userName?<div className="text-red-600">{errors.userName.message}</div>:""}

      <input
        type="text"
        placeholder="Full Name"
        {...register("fullName")}
        className="border p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
      />

        {errors.fullName?<div className="text-red-600">{errors.fullName.message}</div>:""}

      <input
        type="text"
        placeholder="Phone Number"
        {...register("phoneNumber")}
        className="border p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
      />
       
        {errors.phoneNumber?<div className="text-red-600">{errors.phoneNumber.message}</div>:""}

      <input
        type="email"
        placeholder="Email"
        {...register("email")}
        className="border p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
      />
       
        {errors.email?<div className="text-red-600">{errors.email.message}</div>:""}

      <input
        type="text"
        placeholder="Password"
        {...register("password")}
        className="border p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
      />

        {errors.password?<div className="text-red-600">{errors.password.message}</div>:""}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
      >
        {isSubmitting?<span className="loader"></span>:'Register'}
      </button>

       {/* هان بظهر الخطا يلي جاي من server */}

      {error?.length > 0 ? error.map((err)=>{

        return <span className="text-red-600">{err}</span>
      }) :''}
    </form>

    
  </div>
    </>
  )
}

export default Register;