import { Header } from "./Header";

export const Login = () => {
  return (
    <div className="h-screen">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg"
        alt="NET-F_L-IX_BAN-N-E_R"
        className="w-full h-full absolute"
      ></img>

      <form className="absolute w-3/12 mx-auto my-36 left-0 right-0 bg-black text-white p-12 bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">SIGN IN</h1>
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"></input>
        <input type="password" placeholder="PassWord"
        className="p-4 my-4 w-full bg-gray-700"
        ></input>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          Sign In
        </button>
      </form>
    </div>
  );
};
