import ImageContainer from "./Components/ImageContainer";
import useFetchImages from "./hooks/useFetchImages";

function App() {
  const apiKey =
    "live_iSkbja9U8JTdP2QwSPDcodkad8ieGzRbCcXuhnwJNByS3PGWwESiMy91WYE4dU2U";
  const limit = 3;
  const { imageUrl, imageId } = useFetchImages(apiKey, limit);

  return (
    <div className="text-center flex flex-col justify-center items-center h-screen bg-gradient-to-r from-[#f8cdda] to-[#1d2b64]">
      <h1 className="w-full">Memory Game</h1>
      <ImageContainer imageUrl={imageUrl} imageId={imageId} />
    </div>
  );
}

export default App;
