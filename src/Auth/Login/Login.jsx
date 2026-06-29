
import axios from "axios";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { schemaLogin} from './SchemaLogin'
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

    const[error,seterror]=useState([]); 
   
      // هان استخدمنا مكتبة useForm
  const { register,handleSubmit,formState: { errors ,isSubmitting }}=useForm({
     resolver: yupResolver( schemaLogin),
  });
  
  //   هان عملت function يلي بتستقبل ال data
  const registerform= async(data)=>{
        try {
    const response = await axios.post(
      `${import.meta.env.VITE_BURL}/auth/Account/Login`,
      data
    );

    console.log(response.data.accessToken);
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

       
      
      <h2 className="text-3xl font-bold text-center text-gray-900">Login</h2>

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
        {isSubmitting?<span className="loader"></span>:'Login'}
      </button>

       {/* هان بظهر الخطا يلي جاي من server */}

      {error?.length > 0 ? error.map((err)=>{

        return <span className="text-red-600">{err}</span>
      }) :''}

      <div className="text-center text-sm text-gray-600">
        <span>
           Don't have an account?
        </span>
       <Link to="/Register" className="text-blue-600 hover:underline font-medium"> Register here</Link>
    </div>
    </form>   
  </div>
    </>
  )
}

export default Login;