import { ShowErrorObject } from "@/app/types";
import { useRouter } from "next/router";
import { useState } from "react";
import TextInput from "../profile/TextInput";
import { BiLoaderCircle } from "react-icons/bi";

function Register() {

//  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string | "">("");
  const [email, setEmail] = useState<string | "">("");
  const [password, setPassword] = useState<string | "">("");
  const [confirmPassword, setConfirmPassword] = useState<string | "">("");
  const [error, setError] = useState<ShowErrorObject | null>(null);

  const showError = (type: string) => {
      if(error && Object.entries(error).length > 0 && error?.type == type) {
          return error.message
      }
  };

  const register = () => {
    console.log("register")
  }

  return (
    <>
      <div>
          <h1 className="text-center text-[28px] mb-4 font-bold">Register</h1>
          <div className="px-6 pb-2">
              <TextInput
                  string={name}
                  placeHolder="Name"
                  onUpdate={setName}
                  inputType="text"
                  error={showError("name")}
              >
              </TextInput>
          </div>
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
            <div className="px-6 pb-2">
                <TextInput
                    string={confirmPassword}
                    placeHolder="Confirm Password"
                    onUpdate={setConfirmPassword}
                    inputType="password"
                    error={showError("confirmPassword")}
                >
                </TextInput>
            </div>
          <div className="px-6 pb-2 mt-6">
              <button
                  disabled={loading}
                  onClick={() => register()}
                  className={`
                      flex items-center justify-center w-full text-[17px] font-semibold text-white py-3 rounded-sm
                      ${(!name || !email || !password || !confirmPassword) ? 'bg-gray-200' : 'bg-[#F02C56]'}
                  `}
              >
                  {loading ? <BiLoaderCircle className="animate-spin" color="#ffffff" size={25} /> : 'Log In'}
              </button>
          </div>
      </div>
    </>
  )
}

export default Register