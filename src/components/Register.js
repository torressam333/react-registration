import { useEffect, useRef, useState } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/register.css";
import { authRegex } from "../util/authRegex";

const Register = () => {
  //Set focus on user input when comp loads
  const userRef = useRef();
  //If err, put focus on error
  const errRef = useRef();

  //User field initial state
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  //PW field initial state
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  //Matching pw initial state
  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  //Screen msg's initial state
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  //Set focus when comp loads
  useEffect(() => {
    userRef.current.focus();
  }, []);

  //Validate username against regex with input changes
  useEffect(() => {
    setValidName(authRegex.userRegex.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(authRegex.pwRegex.test(pwd));

    //Ensure fields match
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  //If state of any 3 items in dep array changes, clear error
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="username">
          Username:
          <span className={validName ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={validName || !user ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          aria-describedby="uidnote"
          aria-invalid={validName ? "false" : "true"}
          autoComplete="off"
          id="username"
          onBlur={() => setUserFocus(false)}
          onChange={(e) => setUser(e.target.value)}
          onFocus={() => setUserFocus(true)}
          ref={userRef}
          required
          type="text"
        />
        <p
          id="uidnote"
          className={
            userFocus && user && !validName ? "instructions" : "offscreen"
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          4 to 24 characters.
          <br />
          Must begin with a letter.
          <br />
          Letters, numbers, underscores, and hyphens allowed.
        </p>
      </form>
    </section>
  );
};

export default Register;
