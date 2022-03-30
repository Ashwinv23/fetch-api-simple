import React from "react";
import Button from "./Button";

const Form = ({ reqType, setReqType }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Button reqType={reqType} setReqType={setReqType} btnText="users" />
      <Button reqType={reqType} setReqType={setReqType} btnText="posts" />
      <Button reqType={reqType} setReqType={setReqType} btnText="comments" />
    </form>
  );
};

export default Form;
