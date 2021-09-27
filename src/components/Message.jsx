import React from "react";

const Message = ({ msg, bgColor }) => {
  let myStyles = {
    padding: "1rem",
    marginBottom: "1rem",
    margin: "0 auto",
    textAlign: "center",
    color: "#f5f5f5",
    fontWeight: "bold",
    width: "50%",
    backgroundColor: bgColor,
  };
  return (
    <div style={myStyles}>
      <p>{msg}</p>
    </div>
  );
};
export default Message;
