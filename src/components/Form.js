/**
 *
 * @param {*} param0
 * @returns
 *
 * Props coming into the form will come from implementation
 * i.e. The Register.js component
 */
import { useState, useEffect } from "react";
import { authRegex } from "../util/authRegex";

const Form = ({ refOne, validName }) => {
  const [state, setState] = useState({
    user: "",
    validName: false,
    userFocus: false,
    pwd: "",
    validPwd: false,
    pwdFocus: false,
    matchPwd: "",
    validMatch: false,
    matchFocus: false
  });

  //Validate username anytime it changes
  useEffect(() => {
    setState(authRegex.userRegex.test(state.user));
  }, [state.user]);

  //Validate pw/matching pw anytime they change
  useEffect(() => {
    setState(authRegex.pwRegex.test(state.pwd));

    const match = state.pwd === state.matchPwd;
    setState(match);
  }, [state.pwd, state.matchPwd]);

  //Clear err message if user, pwd or matchPwd changes
  useEffect(() => {
    setState("");
  }, [state.user, state.pwd, state.matchPwd]);

  const handleInput = (e) => {};
  const handleFocus = (e) => {};
  const handleBlur = (e) => {};

  return (
    <form>
      <InputWithLabel
        id="username"
        userRef={refOne}
        autoComplete="off"
        onInputChange={handleInput}
        onFocusChange={handleFocus}
        onBlurChange={handleBlur}
        required
        ariaInvalid={validName ? "false" : "true"}
        ariaDescribedby="uidnote"
      >
        Username:
      </InputWithLabel>
    </form>
  );
};

//Helper composable components
const InputWithLabel = ({
  id,
  value,
  type = "text",
  onInputChange,
  onFocusChange,
  onBlurChange,
  children,
  autoComplete,
  ariaInvalid,
  ariaDescribedby
}) => {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
        onFocus={onFocusChange}
        onBlur={onBlurChange}
        autoComplete={autoComplete}
        aria-invalid={ariaInvalid}
        aria-describedby={ariaDescribedby}
      />
    </>
  );
};
export default Form;
