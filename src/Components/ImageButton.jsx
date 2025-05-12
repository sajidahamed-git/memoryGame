import React from 'react'

const ImageButton = ({ src }) => {
  return (
    <button onClick={() => console.log(src)}>
      <img
        src={src}
        alt="cat image"
        className=" object-cover rounded-lg shadow-md"
      />
    </button>
  );
};

export default ImageButton