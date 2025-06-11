import ImageContainer from "./Components/ImageContainer";
import useFetchImages from "./hooks/useFetchImages";

function App() {
  const apiKey =
    "live_iSkbja9U8JTdP2QwSPDcodkad8ieGzRbCcXuhnwJNByS3PGWwESiMy91WYE4dU2U";
  const limit = 12;
  const { imageUrl, imageId } = useFetchImages(apiKey, limit);
  console.log(imageUrl, imageId);

  const difficulty = 3
  // Adjust the difficulty level to control how many images are shown
  // For example, difficulty = 3 will show the first 3 images
  const renderImageUrl = imageUrl.slice(0, difficulty);
  const renderImageId = imageId.slice(0, difficulty);

  // Optionally, show a loading state if not available
  // if (!imageUrl.length || !imageId.length) {
    // return (
      // <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-[#f8cdda] to-[#1d2b64]">
        // <h1 className="w-full">Memory Game</h1>
        // <div className="text-lg mt-4">Loading...</div>
      // </div>
    // );
  // }

  return (
    <div className="text-center flex flex-col justify-center items-center h-screen bg-gradient-to-r from-[#f8cdda] to-[#1d2b64]">
      <h1 className="w-full">Memory Game</h1>
      <ImageContainer imageUrl={renderImageUrl} imageId={renderImageId} />
    </div>
  );
}

export default App;
