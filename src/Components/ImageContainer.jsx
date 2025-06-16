// import React, { useState } from "react";
import { useState } from "react";
import ImageButton from "./ImageButton";
import Swal from "sweetalert2";

export default function ImageContainer({ loadedImages, renderCount = 3, setIsGameStarted }) {
  const [clickedImages, setClickedImages] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

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

  // Only show as many images as are loaded and available
  let displayImages = [];
  if (clickedImages.length === 0) {
    // First round - show initial images
    displayImages = loadedImages.slice(0, renderCount);
  } else {
    // After first round - show new images plus one random clicked image
    displayImages = loadedImages.slice(startIndex, startIndex + renderCount - 1);
    if (displayImages.length > 0) {
      const randomClickedImage = clickedImages[Math.floor(Math.random() * clickedImages.length)];
      // Insert at random position
      const randomPosition = Math.floor(Math.random() * (displayImages.length + 1));
      displayImages.splice(randomPosition, 0, randomClickedImage);
    }
  }

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
