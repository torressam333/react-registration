import { useEffect, useRef, useState } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
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
        <input />
      </form>
    </section>
  );
};

export default Register;
