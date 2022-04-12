import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const InputWithLabel = ({
  validProperty,
  setFocus,
  setField,
  userRef,
  fieldEntity,
  children,
  htmlFor,
  inputType,
  autoComp,
  inputID
}) => {
  return (
    <>
      <label htmlFor={htmlFor}>
        {children}
        {inputID === "confirm_pwd" ? (
          <span className={validProperty && fieldEntity ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
        ) : (
          <span className={validProperty ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
        )}
        <span className={validProperty || !fieldEntity ? "hide" : "invalid"}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </label>
      <input
        aria-describedby="uidnote"
        aria-invalid={validProperty ? "false" : "true"}
        autoComplete={autoComp}
        id={inputID}
        onBlur={() => setFocus(false)}
        onChange={(e) => setField(e.target.value)}
        onFocus={() => setFocus(true)}
        ref={userRef}
        required
        type={inputType}
      />
    </>
  );
};

export default InputWithLabel;
