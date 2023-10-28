"use client"

import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import Register from './auth/Register';
import Login from './auth/Login';
import { useGeneralStore } from '../stores/general';

function AuthOverlay() {

    let { setIsLoginOpen } = useGeneralStore();

    let [isRegistered, setIsRegistered] = useState<boolean>(false);

  return (
    <>
        <div
            id="AuthOverlay"
            className="fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50"
        >
            <div className="relative bg-white w-full max-w-[470px] h-[70%] p-4 rounded-lg">
                <div className="w-full flex justify-end">
                    <button
                        onClick={() => setIsLoginOpen(false)}
                        className="p-1.5 rounded-full bg-gra-100"
                    >
                        <AiOutlineClose size="26" />
                    </button>
                </div>
                {isRegistered ? <Register /> : <Login />}
                <div className="absolute flex items-center justify-center py-5 left-0 bottom-0 border-t w-full">
                    <span className="text-[14px] text-gray-600">Don't have an account?</span>
                    <button
                        onClick={() => setIsRegistered(isRegistered = !isRegistered)}
                        className="text-[14px] text-[#F02C56] font-semibold pl-1"
                    >
                        <span>{!isRegistered ? 'Register' : 'Log In'}</span>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default AuthOverlay