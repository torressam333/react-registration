import Form from "./Form";
import { useEffect, useRef, useState } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import "../assets/register.css";

const Register = () => {
  //Set focus on user input when comp loads
  const userRef = useRef();
  //If err, put focus on error
  const errRef = useRef();

  //Condensed state
  const [state, setState] = useState({
    errMsg: "",
    success: false
  });

  //Set focus when comp loads
  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  return (
    <section>
      <p
        ref={errRef}
        className={state.errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {state.errMsg}
      </p>
      <h1>Sign Up</h1>
      <Form refOne={userRef} validName={state.validName} />
    </section>
  );
};

export default Register;

//May use this later

// //User field initial state
// const [user, setUser] = useState("");
// const [validName, setValidName] = useState(false);
// const [userFocus, setUserFocus] = useState(false);

// //PW field initial state
// const [pwd, setPwd] = useState("");
// const [validPwd, setValidPwd] = useState(false);
// const [pwdFocus, setPwdFocus] = useState(false);

// //Matching pw initial state
// const [matchPwd, setMatchPwd] = useState("");
// const [validMatch, setValidMatch] = useState(false);
// const [matchFocus, setMatchFocus] = useState(false);

// //Screen msg's initial state
// const [errMsg, setErrMsg] = useState("");
// const [success, setSuccess] = useState(false);
