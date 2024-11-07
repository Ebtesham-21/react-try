import React, { useState } from "react";

function ButtonBoot() {
  const buttonClasses = [
    "btn-primary",
    "btn-secondary",
    "btn-success",
    "btn-danger",
    "btn-warning",
  ];
  const [currentClassIndex, setCurrentClassIndex] = useState(0);

  const handleClick = () => {
    setCurrentClassIndex((prevIndex) => (prevIndex + 1) % buttonClasses.length);
  };
  return (
    <div>
      <button
        type="button"
        className={`btn ${buttonClasses[currentClassIndex]}`}
        onClick={handleClick}
      >
        Click Me To Change Color
      </button>
    </div>
  );
}

export default ButtonBoot;
