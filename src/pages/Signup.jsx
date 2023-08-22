import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signUp } = UserAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUp(email, password)
            navigate("/account");
        } catch (e) {
            console.log(e);
        }
    }
    return (
      <div className="max-w-[700px] mx-auto my-16 p-4">
        <div>
          <h1 className="text-2xl font-bold py-2">Sign in to your account</h1>
          <p className="py-2">
            Already have an account?{" "}
            <Link to="/" className="underline">
              Sign In.
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium">Email Adress</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="border p-3 outline-blue-500"
              type="email"
            />
          </div>
          <div className="flex flex-col">
            <label className="py-2 font-medium">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="border p-3 outline-blue-500"
              type="password"
            />
          </div>
          <button className="border border-blue-500 bg-blue-500 hover:bg-transparent w-full p-4 my-2 text-white font-bold hover:text-black duration-100 ease-out rounded-md">
            Sign Up
          </button>
        </form>
      </div>
    );
}
export default Signup
