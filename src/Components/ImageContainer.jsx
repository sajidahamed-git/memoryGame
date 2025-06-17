// import React, { useState } from "react";

import { useEffect, useState } from "react";
import ImageButton from "./ImageButton";
import Swal from "sweetalert2";
import StartScreen from "./StartScreen";

export default function ImageContainer({
  loadedImages,
  setIsGameStarted,
  difficulty,
}) {
  const [isGameWon, setIsGameWon] = useState(false);

  useEffect(() => {
    if (isGameWon) {
      setIsGameWon(true);
      Swal.fire({
        icon: "success",
        title: "You win!",
        text: "You've completed all 10 rounds!",
      }).then(() => {
        setClickedImages([]);
        setStartIndex(0);
      });
      if (setIsGameStarted) setIsGameStarted(false);
    }
  }, [isGameWon, setIsGameStarted]);

  const renderCount = difficulty === "hard" ? 5 : 3;

  const rounds = 10;

  const [clickedImages, setClickedImages] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [randomPosition, setRandomPosition] = useState(null);
  const [roundsPlayed, setroundsPlayed] = useState(0);

  const handleImageClick = (url, id) => {
    if (clickedImages.some((img) => img.id === id)) {
      Swal.fire({
        icon: "error",
        title: "You lose!",
        text: "You have already clicked this image!",
      }).then(() => {
        setClickedImages([]);
        setStartIndex(0);
        setRandomPosition(null);
        setroundsPlayed(0);
        if (setIsGameStarted) setIsGameStarted(false);
      });
      return;
    }
    setClickedImages((prev) => [...prev, { id, url }]);
    setroundsPlayed(roundsPlayed + 1);
    if (roundsPlayed === rounds) {
      setIsGameWon(true);
    }

    // Move to next batch if available
    if (startIndex + renderCount < loadedImages.length) {
      setStartIndex(startIndex + renderCount);
      // Set new random position for next set
      setRandomPosition(Math.floor(Math.random() * renderCount));
    }
  };

  // Only show as many images as are loaded and available
  let displayImages = [];
  if (clickedImages.length === 0) {
    // First round - show initial images
    displayImages = loadedImages.slice(0, renderCount);
  } else {
    // After first round - show new images plus one random clicked image
    const newImages = loadedImages.slice(
      startIndex,
      startIndex + renderCount - 1
    );
    if (newImages.length > 0) {
      const randomClickedImage =
        clickedImages[Math.floor(Math.random() * clickedImages.length)];
      // Use the stored random position
      displayImages = [...newImages];
      displayImages.splice(randomPosition, 0, randomClickedImage);
    }
  }

  // Ensure we always have renderCount number of images
  if (displayImages.length < renderCount) {
    // If we don't have enough images, pad with already shown images
    const remainingCount = renderCount - displayImages.length;
    const alreadyShownImages = clickedImages.filter(
      (img) => !displayImages.some((displayImg) => displayImg.id === img.id)
    );
    const paddingImages = alreadyShownImages.slice(0, remainingCount);
    displayImages = [...displayImages, ...paddingImages];
  }

  if (displayImages.length === 0) {
    return (
      <div className="flex justify-center items-center h-[300px] w-full text-amber-900">
        Loading images...
      </div>
    );
  }

  return (
    <div>
      {isGameWon && (
        <div className="flex flex-col justify-center items-center h-[300px] w-full">
          <div className="text-4xl font-bold text-white mb-4 animate-bounce">
            🎉 Congratulations! 🎉
          </div>
          <div className="text-2xl text-white">
            You've completed all {rounds} rounds!
          </div>
          <div className="text-lg text-white mt-2">
            <StartScreen />
          </div>
        </div>
      )}
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
