import React from "react";

const Button = ({ btnText, reqType, setReqType }) => {
  return (
    <button
      type="button"
      className={btnText === reqType ? "selected" : null}
      onClick={(e) => setReqType(btnText)}
    >
      {btnText}
    </button>
  );
};

export default Button;
