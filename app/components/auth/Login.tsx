import { ShowErrorObject } from '@/app/types';
import { useState } from 'react'
import TextInput from '../profile/TextInput';
import { BiLoaderCircle } from 'react-icons/bi';

function Login() {

    const [loading, setLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string | "">("");
    const [password, setPassword] = useState<string | "">("");
    const [error, setError] = useState<ShowErrorObject | null>(null);

    const showError = (type: string) => {
        if(error && Object.entries(error).length > 0 && error?.type == type) {
            return error.message
        }
        return ''
    };

    const login = () => {
        console.log("login")
    }

  return (
    <>
        <div>
            <h1 className="text-center text-[28px] mb-4 font-bold">Log In</h1>
            <div className="px-6 pb-2">
                <TextInput
                    string={email}
                    placeHolder="Email Address"
                    onUpdate={setEmail}
                    inputType="email"
                    error={showError("email")}
                >
                </TextInput>
            </div>
            <div className="px-6 pb-2">
                <TextInput
                    string={password}
                    placeHolder="Password"
                    onUpdate={setPassword}
                    inputType="password"
                    error={showError("password")}
                >
                </TextInput>
            </div>
            <div className="px-6 pb-2 mt-6">
                <button
                    disabled={loading}
                    onClick={() => login()}
                    className={`
                        flex items-center justify-center w-full text-[17px] font-semibold text-white py-3 rounded-sm
                        ${(!email || !password) ? 'bg-gray-200' : 'bg-[#F02C56]'}
                    `}
                >
                    {loading ? <BiLoaderCircle className="animate-spin" color="#ffffff" size={25} /> : 'Log In'}
                </button>
            </div>
        </div>
    </>
  )
}

export default Login