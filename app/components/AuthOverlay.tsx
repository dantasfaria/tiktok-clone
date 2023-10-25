"use client"

import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import Register from './auth/Register';
import Login from './auth/Login';

function AuthOverlay() {

    const [isRegistered, setIsRegistered] = useState<boolean>(false);

  return (
    <>
        <div
            id="AuthOverlay"
            className="fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50"
        >
            <div className="relative bg-white w-full max-w-[470px] h-[70%] p-4 rounded-lg">
                <div className="w-full flex justify-end">
                    <button
                        className="p-1.5 rounded-full bg-gra-100"
                    >
                        <AiOutlineClose size="26" />
                    </button>
                </div>
                {isRegistered ? <Register /> : <Login />}
            </div>
        </div>
    </>
  )
}

export default AuthOverlay