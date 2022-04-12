import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const ParagraphHelp = ({
  focusedField,
  fieldEntity,
  validProperty,
  children
}) => {
  return (
    <>
      <p
        id="uidnote"
        className={
          focusedField && fieldEntity && !validProperty
            ? "instructions"
            : "offscreen"
        }
      >
        {children}
      </p>
    </>
  );
};

export default ParagraphHelp;
