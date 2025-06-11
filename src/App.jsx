import ImageContainer from "./Components/ImageContainer";
import useFetchImages from "./hooks/useFetchImages";
import React, { useState } from "react";

// import testData from "./testingdata/test.json";

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const apiKey =
    "live_iSkbja9U8JTdP2QwSPDcodkad8ieGzRbCcXuhnwJNByS3PGWwESiMy91WYE4dU2U";
  const limit = 50;

  const renderCount = 5; // Number of images to render at a time

  // Use test data from test.json
  // const imageUrl = testData.imageUrl;
  // const imageId = testData.imageID;

  const { imageUrl, imageId } = useFetchImages(apiKey, limit);

  if (!isGameStarted) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-[#f8cdda] to-[#1d2b64]">
        <h1 className="w-full text-center">Memory Game</h1>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setIsGameStarted(true)}
        >
          Start Game
        </button>
      </div>
    );
  }


  // Wait for images to load
  if (!imageUrl || !imageId || imageUrl.length === 0 || imageId.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center  h-screen bg-gradient-to-r from-[#f8cdda] to-[#1d2b64]">
        <h1 className="w-full text-center">Memory Game</h1>
        <div className="text-lg mt-4">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-15 justify-center h-screen bg-gradient-to-r from-[#f8cdda] to-[#1d2b64]">
      <h1 className="w-full text-center">Memory Game</h1>
      <ImageContainer
        allImageUrl={imageUrl}
        allImageId={imageId}
        renderCount={renderCount}
      />
    </div>
  );
}

export default App;
