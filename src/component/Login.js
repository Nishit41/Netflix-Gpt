import { useRef, useState } from "react";
import { Header } from "./Header";
import { FORM_TYPE } from "../constant/constatnt";
import { checkValidate } from "./utills.js/validate";

export const Login = () => {
  const [formType, setFormType] = useState(FORM_TYPE.SIGNIN);
  const [error, setError] = useState();
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const handleSubmit = () => {
    const errorMessage = checkValidate(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value
    );
    setError(errorMessage)
    if (errorMessage) return;
  };

  return (
    <div className="h-screen">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg"
        alt="NET-F_L-IX_BAN-N-E_R"
        className="w-full h-full absolute"
      ></img>
      <form
        className="absolute w-3/12 mx-auto my-36 left-0 right-0 bg-black text-white p-8 bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">SIGN IN</h1>
        {formType === FORM_TYPE.SIGNUP && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-700"
            ref={name}
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
          ref={email}
        ></input>
        <input
          type="password"
          placeholder="PassWord"
          className="p-4 my-4 w-full bg-gray-700"
          ref={password}
        ></input>

        {error && <p className="text-red-400 text-lg">{error}</p>}
        {formType === FORM_TYPE.SIGNIN ? (
          <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
            onClick={handleSubmit}
          >
            {FORM_TYPE.SIGNIN}
          </button>
        ) : (
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleSubmit}>
            {FORM_TYPE.SIGNUP}
          </button>
        )}
        {formType === FORM_TYPE.SIGNUP ? (
          <div
            className="text-white text-sm cursor-pointer"
            onClick={() => setFormType(FORM_TYPE.SIGNIN)}
          >
            Already registered? SignIn now
          </div>
        ) : (
          <div
            className="text-white text-sm cursor-pointer"
            onClick={() => setFormType(FORM_TYPE.SIGNUP)}
          >
            New To Netflix? SignUp now
          </div>
        )}
      </form>
    </div>
  );
};
