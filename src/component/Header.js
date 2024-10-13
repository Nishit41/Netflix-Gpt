import { signOut } from "firebase/auth";
import { USER_AVATAR } from "../constant/constatnt";
import { auth } from "./utills.js/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "./utills.js/userSlice";

export const Header = () => {
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const user = useSelector(store=>store.user)
 const handleSignOut = () => {
  signOut(auth).then(() => {
    dispatch(removeUser())
    navigate("/")
  }).catch((error) => {
    // An error happened.
  });
}

  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="L_O-G_O"
        className="w-48 h-24"
      />
     {user && <div className="flex gap-2 items-center">
      <img
        className="hidden md:block w-12 h-12"
        alt="usericon"
        src={user.photoURL}
      />
     <button onClick={handleSignOut} className="font-bold text-white ">
        (Sign Out)
      </button>
      </div>}
    </div>
  );
};
