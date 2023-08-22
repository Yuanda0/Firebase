import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      navigate("/account")
    } catch (e) {
      if (e.code === 'auth/wrong-password') {
        setError('Wrong password. Please try again.');
      } else if (e.code === 'auth/user-not-found') {
        setError('User not found. Please check your email.');
      } else {
        setError('An error occurred. Please try again later.');
      }
      console.log(e.message);
    }
  }

  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2">Sign in to your account</h1>
        <p className="py-2">
          Don't have an account yet?{" "}
          <Link to="/signup" className="underline">
            Sign Up.
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Email Adress</label>
          <input onChange={(e)=>setEmail(e.target.value)} className="border p-3 outline-blue-500" type="email" />
        </div>
        <div className="flex flex-col">
          <label className="py-2 font-medium">Password</label>
          <input onChange={(e)=>setPassword(e.target.value)} className="border p-3 outline-blue-500" type="password" />
        </div>
        {error && (
          <p className="text-red-500 mt-2">{error}</p>
        )}
        <button className="border border-blue-500 bg-blue-500 hover:bg-transparent w-full p-4 my-2 text-white font-bold hover:text-black duration-100 ease-out rounded-md">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Signin;
