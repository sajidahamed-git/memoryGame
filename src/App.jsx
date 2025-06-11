import React, { useState } from "react";
// import clsx from "clsx";

import ImageContainer from "./Components/ImageContainer";
import Loading from "./Components/loading";
import StartSCreen from "./Components/StartScreen";

import useFetchImages from "./hooks/useFetchImages";
import usePreloadImages from "./hooks/usePreloadimages";

// import testData from "./testingdata/test.json";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [renderCount, setRenderCount] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const apiKey =
    "live_iSkbja9U8JTdP2QwSPDcodkad8ieGzRbCcXuhnwJNByS3PGWwESiMy91WYE4dU2U";
  const limit = 51;
  const { imageUrl, imageId } = useFetchImages(apiKey, limit);

  // Preload images as soon as they are fetched
  usePreloadImages(imageUrl, setImagesLoaded);

  if (!isGameStarted) {
    return (
      <StartSCreen
        setIsGameStarted={setIsGameStarted}
        setRenderCount={setRenderCount}
        imagesLoaded={imagesLoaded}
      />
    );
  }

  if (!imagesLoaded) {
    return <Loading />;
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
