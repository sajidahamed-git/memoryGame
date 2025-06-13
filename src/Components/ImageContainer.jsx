// import React, { useState } from "react";
import { useState } from "react";
import ImageButton from "./ImageButton";
import Swal from "sweetalert2";

export default function ImageContainer({ loadedImages, renderCount = 3, setIsGameStarted }) {
  const [clickedImages, setClickedImages] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  // Only show as many images as are loaded and available
  const availableCount = Math.min(renderCount, loadedImages.length - startIndex);
  const displayImages = loadedImages.slice(startIndex, startIndex + availableCount);

  const handleImageClick = (url, id) => {
    if (clickedImages.some((img) => img.id === id)) {
      Swal.fire({
        icon: "error",
        title: "You lose!",
        text: "You have already clicked this image!",
      }).then(() => {
        setClickedImages([]);
        setStartIndex(0);
        if (setIsGameStarted) setIsGameStarted(false);
      });
      return;
    }
    setClickedImages((prev) => [...prev, { id, url }]);
    // Move to next batch if available
    if (startIndex + renderCount < loadedImages.length) {
      setStartIndex(startIndex + renderCount);
    }
  };

  if (displayImages.length === 0) {
    return (
      <div className="flex justify-center items-center h-[300px] w-full text-amber-900">
        Loading images...
      </div>
    );
  }

  return (
    <div className="flex gap-2 justify-center h-[300px] w-full">
      {displayImages.map((img) => (
        <ImageButton
          key={img.id}
          src={img.url}
          onClick={() => handleImageClick(img.url, img.id)}
        />
      ))}
    </div>
  );
}
