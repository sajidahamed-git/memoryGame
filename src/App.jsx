import ImageContainer from "./Components/ImageContainer";
// import useFetchImages from "./hooks/useFetchImages";

import testData from "./testingdata/test.json";

function App() {
  
  // const apiKey =
  //   "live_iSkbja9U8JTdP2QwSPDcodkad8ieGzRbCcXuhnwJNByS3PGWwESiMy91WYE4dU2U";
  // const limit = 50;


  // Use test data from test.json
  const imageUrl = testData.imageUrl;
  const imageId = testData.imageID;
  const renderCount = 5; // Number of images to render at a time

  // const { imageUrl, imageId } = useFetchImages(apiKey, limit);

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
