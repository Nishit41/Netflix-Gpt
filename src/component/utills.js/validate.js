export const checkValidate = (email, password, name) => {
  const userName = /^[A-Za-z][A-Za-z0-9._]{2,15}$/.test(name);
  const isEmailValid =
    /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
  if (!isEmailValid) return "EmailId is In valid";
  if (!isPasswordValid) return "Password is not Valid";
  if (!userName) return "UserName is not valid";
  return null;
};
