import React, { useState } from 'react';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const { user, logout, changePassword } = UserAuth();
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.log(e);
    }
  }

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    try {
      await changePassword(newPassword);
      setError('');
      setNewPassword('');
      setConfirmPassword('');
      setShowPasswordFields(false); 
      console.log('Password changed successfully.');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  }

  const handleCancel = () => {
    setShowPasswordFields(false);
    setError('');
    setNewPassword('');
    setConfirmPassword('');
  }

  return (
    <div className="max-w-[700px] my-24 mx-auto border-2 border-blue-500 rounded-md h-[450px]">
      <h1 className="text-5xl font-bold text-black">Account</h1>
      <p>
        Email: <strong>{user && user?.email}</strong>
      </p>
      {error && (
        <p className="text-red-500 mt-2">{error}</p>
      )}
      <div className='mt-10 flex flex-col gap-10 mx-auto max-w-[140px]'>
        <button onClick={handleLogout} className='bg-red-600 w-[140px] py-3 rounded-md text-white font-bold hover:bg-transparent hover:text-red-600 border-2 border-red-600 duration-200 ease-in-out'>Logout</button>
        {!showPasswordFields && (
          <button onClick={() => setShowPasswordFields(true)} className='bg-gray-600 py-4 font-bold text-white rounded-md hover:text-gray-600 hover:bg-transparent border-2 border-gray-600 duration-200 ease-in-out'>Change Password</button>
        )}
        {showPasswordFields && (
          <div className='flex flex-col'>
            <label className='font-medium'>New Password</label>
            <input onChange={(e) => setNewPassword(e.target.value)} className='border p-3 outline-blue-500' type='password' value={newPassword} />
            <label className='font-medium'>Confirm Password</label>
            <input onChange={(e) => setConfirmPassword(e.target.value)} className='border p-3 outline-blue-500' type='password' value={confirmPassword} />
            <div className='flex gap-2 mt-2'>
              <button onClick={handleChangePassword} className='bg-gray-600 py-2 px-4 font-bold text-white rounded-md hover:text-gray-600 hover:bg-transparent border-2 border-gray-600 duration-200 ease-in-out'>Save</button>
              <button onClick={handleCancel} className='bg-red-600 py-2 px-4 font-bold text-white rounded-md hover:text-red-600 hover:bg-transparent border-2 border-red-600 duration-200 ease-in-out'>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Account;
