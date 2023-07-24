import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const Friend = ({ amigo }) => {
  const [change, setChange] = useState("");

  return (
    <div>
      <h1 className="text-center text-light">
        Hello {amigo} {change}
      </h1>
      <Button
        className="m-5"
        variant="success"
        onClick={() => setChange("(from changed state)")}
      >
        Change State
      </Button>
    </div>
  );
};

export default Friend;
