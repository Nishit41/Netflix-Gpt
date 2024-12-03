import { onAuthStateChanged, signOut } from "firebase/auth";
import { LOGO } from "../constants/constant";
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { useEffect } from "react";
import { toggleGptSearchView } from "./gptSlice";
import { LANGUAGE_OPTIONS } from "../constants/language-constant";
import { changeLanguage } from "./utils/configSlice";

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
  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="md:absolute bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row justify-between pb-2">
      <img src={LOGO} alt="L_O-G_O" className="w-48 h-24 mx-auto md:mx-0" />
      {user && (
        <div className="flex gap-2 items-center sm: justify-between flex-wrap">
          <button
            className="text-white bg-purple-800 p-2 rounded-md"
            onClick={handleGptSearch}
          >
            GPT Search
          </button>
          <select
            className="w-24 p-2 rounded-md border-none bg-black text-white hover:border-none"
            onChange={handleLanguageChange}
          >
            {LANGUAGE_OPTIONS?.map((lang) => (
              <option key={lang?.identifier}>{lang?.name}</option>
            ))}
          </select>
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
