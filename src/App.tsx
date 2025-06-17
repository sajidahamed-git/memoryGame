import React, { useState } from "react";
// import clsx from "clsx";

import ImageContainer from "./Components/ImageContainer";
import Loading from "./Components/loading";
import StartSCreen from "./Components/StartScreen";
import GithubLink from "./Components/GithubLink";

//import useFetchImages from "./hooks/useFetchImages";
import usePreloadImages from "./hooks/usePreloadimages";

// import type { LoadedImagesArray } from "./types/types";

import { testData } from "./testingdata/test";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [renderCount, setRenderCount] = useState(null);
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [difficulty, setDifficulty] = useState(null);


  const apiKey =
    "live_iSkbja9U8JTdP2QwSPDcodkad8ieGzRbCcXuhnwJNByS3PGWwESiMy91WYE4dU2U";



  let fetchedImages = testData;

  if (difficulty === "easy") {
    fetchedImages = testData.slice(0, 25);
    //useFetchImages(apiKey, 25, 3);
  } else if (difficulty === "hard") {
    fetchedImages = testData.slice(25, 50);
    //useFetchImages(apiKey, 50, 5);
  }


  const {loadedImages} =  usePreloadImages(fetchedImages,setIsImagesLoaded, 3)

  if (!isGameStarted) {
    return (
      <>
        <StartSCreen
          setIsGameStarted={setIsGameStarted}
          setRenderCount={setRenderCount}
          imagesLoaded={isImagesLoaded}
          setDifficulty={setDifficulty}
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
        difficulty={difficulty}


      />
      <GithubLink />
    </div>
  );
}

export default App;
