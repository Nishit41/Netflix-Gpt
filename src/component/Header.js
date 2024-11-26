import { onAuthStateChanged, signOut } from "firebase/auth";
import { LOGO, USER_AVATAR } from "../constant/constant";
import { auth } from "./utills.js/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utills.js/userSlice";
import { useEffect } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [auth]);

  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img src={LOGO} alt="L_O-G_O" className="w-48 h-24" />
      {user && (
        <div className="flex gap-2 items-center">
          <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={user.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
