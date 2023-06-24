import React from "react";

const Button = (props) => {
  return (
    <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-red-500 h-[60px] hover:bg-pink-800 transition-all mt-4">
      {props.text}
    </button>
  );
};

export {Button};
