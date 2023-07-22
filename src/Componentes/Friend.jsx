import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const Friend = ({ amigo }) => {
  const [change, setChange] = useState("(from changed state)");

  return (
    <div>
      <h1 className="text-center text-light"> Hello {amigo} </h1>
      <Button variant="success" onClick={() => setChange(change)}>
        Change State
      </Button>{" "}
    </div>
  );
};

export default Friend;
