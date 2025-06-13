import React, { useState } from "react";
// import clsx from "clsx";

import ImageContainer from "./Components/ImageContainer";
import Loading from "./Components/loading";
import StartSCreen from "./Components/StartScreen";
import GithubLink from "./Components/GithubLink";

import useFetchImages from "./hooks/useFetchImages";
import usePreloadImages from "./hooks/usePreloadimages";

// import type { LoadedImagesArray } from "./types/types";

// import testData from "./testingdata/test.json";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [renderCount, setRenderCount] = useState(null);
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);

  // const [loadedImages, setLoadedImages] = useState<LoadedImagesArray>([]);

  const apiKey =
    "live_iSkbja9U8JTdP2QwSPDcodkad8ieGzRbCcXuhnwJNByS3PGWwESiMy91WYE4dU2U";
  const limit = 50;
  const fetchedImages = useFetchImages(apiKey, limit);
  console.log("Fetched Images:", fetchedImages);
  

  // Preload images as soon as they are fetched
  const {loadedImages} =  usePreloadImages(fetchedImages,setIsImagesLoaded, 5)

  if (!isGameStarted) {
    return (
      <>
        <StartSCreen
          setIsGameStarted={setIsGameStarted}
          setRenderCount={setRenderCount}
          imagesLoaded={isImagesLoaded}
        />
        <GithubLink />
      </>
    );
  }

  if (!isImagesLoaded) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-15 justify-center h-screen bg-gradient-to-r from-[#f8cdda] to-[#1d2b64]">
      <h1 className="w-full text-center">Memory Game</h1>
      <ImageContainer
        loadedImages={loadedImages}
        setIsGameStarted={setIsGameStarted}


      />
      <GithubLink />
    </div>
  );
}

export default App;
