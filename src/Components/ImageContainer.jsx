import React, { useState } from "react";
import ImageButton from "./ImageButton";
import Swal from "sweetalert2";

export default function ImageContainer({ allImageUrl, allImageId,renderCount }) {

  const [clickedImages, setClickedImages] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
    // Number of images to render at a time

  //initial images to display when none are clicked
  const initialImageId = allImageId.slice(startIndex, startIndex + renderCount);
  const initialImageUrl = allImageUrl.slice(
    startIndex,
    startIndex + renderCount
  );

  const initialImages = initialImageId.map((id, index) => ({
    id,
    url: initialImageUrl[index],
  }));
  // console.log(initialImages);

  // Add previously clicked images to the current set (if not already present)
  //since we are displaying 3 images only one should be a clicked image
  // Pick a random clicked image object (if any)
  const randomClickedImageObj =
    clickedImages.length > 0
      ? clickedImages[Math.floor(Math.random() * clickedImages.length)]
      : null;

  let displayImages = [];
  if (!randomClickedImageObj) {
    displayImages = initialImages;
  } else {
    // If the random clicked image is already in initialImages, just use initialImages
    if (initialImages.some((img) => img.id === randomClickedImageObj.id)) {
      displayImages = initialImages;
    } else {
      // Replace a random index in initialImages with the clicked image
      const replaceIdx = Math.floor(Math.random() * initialImages.length);
      displayImages = [...initialImages];
      displayImages[replaceIdx] = randomClickedImageObj;
    }
  }

  const handleImageClick = (url, id) => {
    // Check if the image has already been clicked
    if (clickedImages.some((img) => img.id === id)) {
      console.log("Image already clicked: you lose", id);

      Swal.fire({
        icon: "error",
        title: "You lose!",
        text: "You have already clicked this image!",
      });
    }
    setClickedImages((prev) => [...prev, { id, url }]);

    // Move to next 3 images if available
    if (startIndex + renderCount < allImageUrl.length) {
      setStartIndex(startIndex + renderCount);
    }
  };

  // useEffect(() => {
  //   console.log(clickedImages);
  // }, [clickedImages]);

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
