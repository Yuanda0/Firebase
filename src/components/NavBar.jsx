import React from 'react'
import {Link, useNavigate} from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
    return (
      <div className="fixed top-0 left-0 flex w-full h-[75px] bg-blue-600">
        <h1 onClick={()=>navigate("/")} className="cursor-pointer mr-auto font-bold p-3 text-3xl">Auth App</h1>
        <div className='flex ml-auto'>
          <Link to="/signup" className="links">
            Sign up
          </Link>
          <Link className='links' to="/account">Account</Link>
        </div>
      </div>
    );
}
export default NavBar
