import { useState } from "react"
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";


export default function SignUp() {
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [check, setCheck] = useState(false);

  const isMatch = password === confirm && password !== "";

  return (
    <>
      <div className="bg-amber-500 w-full py-6 text-center">
        <h1 className="headerTitle">
          SulyBus Stop
        </h1>
      </div>

      <div className="loginContainer mt-6">
        <div className="w-full max-w-sm flex flex-wrap gap-3 px-4">
          
          <div>
            <label htmlFor="firstName" className="labels">First name</label>
            <input id="firstName" type="text" className="inputs w-35" />
          </div>

          <div>
            <label htmlFor="lastName" className="labels">Last name</label>
            <input id="lastName" type="text" className="inputs w-35" />
          </div>

          <div>
            <label htmlFor="phone" className="labels">Phone number</label>
            <input id="phone" type="text" className="inputs w-35" />
          </div>

          <div>
            <label htmlFor="email" className="labels">Email address</label>
            <input id="email" type="email" className="inputs w-60" />
          </div>

          <div>
            <label htmlFor="password" className="labels">Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="inputs w-65" />
          </div>

          <div>
            <label htmlFor="confPassword"  className="labels ">Confirm password</label>
            <input id="confPassword" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} className="inputs w-65" />
          </div>

                {confirm && (
        <p className={`font-[1rem] ${isMatch ? "text-green-600" : "text-red-600"}`}>
          {isMatch ? "Passwords match " : "Passwords do not match "}
        </p>
      )}

          <div>
            <label className="labels">Agree to the terms
            <input type="checkbox" className="bg-gray-200 w-full px-4 py-2 text-base rounded-xl
           focus:outline-none 
           transition" required/>
            
            </label>

            <button disabled={!isMatch}  onClick={() => console.log("Hello")} className="btn">Sign up</button>
          </div>

          <div className="mt-4 w-full flex justify-center">
  <GoogleLogin
    onSuccess={async (credentialResponse) => {
      try {
        const res = await axios.post(
          "http://localhost:8000/api/google-login/",
          {
            token: credentialResponse.credential,
          }
        );

        console.log("Google login success:", res.data);

        // Example: store JWT if backend sends one
        // localStorage.setItem("token", res.data.access);

      } catch (error) {
        console.error("Google login failed", error);
      }
    }}
    onError={() => {
      console.log("Google Login Failed");
    }}
  />
</div>

          
          
        </div>
        
      </div>
    </>
  )
}
