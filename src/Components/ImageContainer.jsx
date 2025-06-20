import { useEffect, useState } from "react";
import ImageButton from "./ImageButton";
import Swal from "sweetalert2";

export default function ImageContainer({
  loadedImages,
  setIsGameStarted,
  difficulty,
}) {
  console.log(loadedImages.length);

  const [clickedImages, setClickedImages] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [roundsPlayed, setroundsPlayed] = useState(0);

  const renderCount = difficulty === "hard" ? 5 : 3;
  const rounds = 10;

  useEffect(() => {
    if (roundsPlayed >= rounds) {
      Swal.fire({
        icon: "success",
        title: "You win!",
        text: "You've completed all 10 rounds!",
      }).then(() => resetGame());
    }
  }, [roundsPlayed]);

  const resetGame = () => {
    setClickedImages([]);
    setStartIndex(0);
    setroundsPlayed(0);
    setIsGameStarted?.(false);
  };

  const handleImageClick = (url, id) => {
    //if the image is already clicked, show an error message
    if (clickedImages.some((img) => img.id === id)) {
      Swal.fire({
        icon: "error",
        title: "You lose!",
        text: "You have already clicked this image!",
      }).then(() => {
        setClickedImages([]);
        setStartIndex(0);
        setroundsPlayed(0);
        if (setIsGameStarted) setIsGameStarted(false);
      });
      return;
    }

    //if the image is not clicked, add it to the clickedImages array
    setClickedImages((prev) => [...prev, { id, url }]);

    //if the rounds played is equal to the rounds, set the isGameWon state to true
    setroundsPlayed((prev) => prev + 1);

    //if the startIndex is less than the loadedImages length, set the startIndex to the startIndex plus the renderCount
    if (startIndex + renderCount < loadedImages.length) {
      setStartIndex(startIndex + renderCount);
    }
  };

  //if the clickedImages length is 0, show the initial images
  let displayImages = [];
  if (clickedImages.length === 0) {
    displayImages = loadedImages.slice(0, renderCount);
  } else {
    //if the clickedImages length is not 0, show the new images plus one random clicked image
    const newImages = loadedImages.slice(
      startIndex,
      startIndex + renderCount - 1
    );
    if (newImages.length > 0) {
      const randomClickedImage =
        clickedImages[Math.floor(Math.random() * clickedImages.length)];
      displayImages = [...newImages];
      //displayImages.splice(randomPosition, 0, randomClickedImage);
      displayImages.push(randomClickedImage);
    }
  }

  //if the displayImages length is less than the renderCount, show the remaining images
  if (displayImages.length < renderCount) {
    const remainingCount = renderCount - displayImages.length;
    const alreadyShownImages = clickedImages.filter(
      (img) => !displayImages.some((displayImg) => displayImg.id === img.id)
    );
    const paddingImages = alreadyShownImages.slice(0, remainingCount);
    displayImages = [...displayImages, ...paddingImages];
  }

  //if the displayImages length is 0, show a loading message
  if (displayImages.length === 0) {
    return (
      <div className="flex justify-center items-center h-[300px] w-full text-amber-900">
        Loading images...
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-2 justify-center h-[300px] w-full">
        {displayImages.map((img) => (
          <ImageButton
            key={img.id}
            src={img.url}
            onClick={() => handleImageClick(img.url, img.id)}
          />
        ))}
      </div>
    </div>
  );
}
