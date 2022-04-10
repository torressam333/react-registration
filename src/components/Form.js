/**
 *
 * @param {*} param0
 * @returns
 *
 * Props coming into the form will come from implementation
 * i.e. The Register.js component
 */
import { useState, useEffect, useRef } from "react";
import { authRegex } from "../util/authRegex";

const Form = ({ refOne }) => {
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

  const handleInput = (evt) => {
    //Apt to handling events from multiple inputs generically
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleFocus = (evt) => {
    setState({
      ...state,
      userFocus: true
    });
  };

  const handleBlur = (evt) => {
    setState({
      ...state,
      userFocus: false
    });
  };

  return (
    <form>
      <InputWithLabel
        id="username"
        userRef={refOne}
        value={state.user}
        autoComplete="off"
        onInputChange={handleInput}
        onFocusChange={handleFocus}
        onBlurChange={handleBlur}
        required
        ariaInvalid={state.validName ? "false" : "true"}
        ariaDescribedby="uidnote"
        name="user"
        isFocused
      >
        Username:
      </InputWithLabel>
    </form>
  );
};

//Helper composable components
const InputWithLabel = ({
  id,
  name,
  value,
  type = "text",
  onInputChange,
  onFocusChange,
  onBlurChange,
  children,
  autoComplete,
  ariaInvalid,
  ariaDescribedby,
  isFocused
}) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onInputChange}
        onFocus={onFocusChange}
        onBlur={onBlurChange}
        autoComplete={autoComplete}
        aria-invalid={ariaInvalid}
        aria-describedby={ariaDescribedby}
        autoFocus={isFocused}
        ref={inputRef}
      />
    </>
  );
};
export default Form;
