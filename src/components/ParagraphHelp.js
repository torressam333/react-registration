const ParagraphHelp = ({
  focusedField,
  fieldEntity,
  validProperty,
  children,
  fieldID
}) => {
  return (
    <>
      <p
        id={fieldID}
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
