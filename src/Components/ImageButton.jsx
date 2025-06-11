import React from "react";

const ImageButton = ({ src ,onClick}) => {
  // console.log(src);
  
  return (
    <button  className="flex justify-center items-center">
      <img
        onClick={onClick}
        src={src}
        alt="cat image"
        className="w-[300px] h-[300px] object-cover rounded-lg shadow-md"
      />
    </button>
  );
};

export default ImageButton;
