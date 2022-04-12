import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const InputWithLabel = ({
  validProperty,
  setFocus,
  setField,
  userRef,
  fieldEntity,
  children,
  htmlFor,
  focusedField
}) => {
  return (
    <>
      <label htmlFor={htmlFor}>
        {children}
        <span className={validProperty ? "valid" : "hide"}>
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <span className={validProperty || !fieldEntity ? "hide" : "invalid"}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </label>
      <input
        aria-describedby="uidnote"
        aria-invalid={validProperty ? "false" : "true"}
        autoComplete="off"
        id="username"
        onBlur={() => setFocus(false)}
        onChange={(e) => setField(e.target.value)}
        onFocus={() => setFocus(true)}
        ref={userRef}
        required
        type="text"
      />
    </>
  );
};

export default InputWithLabel;
