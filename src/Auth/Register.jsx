
import axios from "axios";
import { useForm } from "react-hook-form"

function Register() {
  const { register,handleSubmit}=useForm();
  const registerform= async(data)=>{
        try {
    const response = await axios.post(
      `${import.meta.env.VITE_BURL}/auth/Account/Register`,
      data
    );

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
  }

  return (
    <>
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

      <input
        type="text"
        placeholder="Full Name"
        {...register("fullName")}
        className="border p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        placeholder="Phone Number"
        {...register("phoneNumber")}
        className="border p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="email"
        placeholder="Email"
        {...register("email")}
        className="border p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="password"
        placeholder="Password"
        {...register("password")}
        className="border p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
      >
        Save
      </button>
    </form>
  </div>
    </>
  )
}

export default Register;