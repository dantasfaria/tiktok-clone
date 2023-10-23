import { TextInputCompTypes } from '@/app/types'
import React from 'react'

function TextInput({ string, inputType, placeHolder, error, onUpdate }: TextInputCompTypes) {
  return (
    <>
        <input 
            placeholder={placeHolder}
            className="block w-full bg-[#F1F1F2] text-gray-800 border border-gray-300 rounded-md py-2.5 px-3 focus:outline-none"
            value={string || ""}
            onChange={(event) => onUpdate(event.target.value)}
            type={inputType}
            autoComplete="off"
        />
        <div className="text-red-500 text-[14px] font-semibold">
            {error ? (error) : null}
        </div>
    </>
  )
}

export default TextInput