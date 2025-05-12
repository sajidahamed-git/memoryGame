import ImageContainer from "./Components/ImageContainer";
import useFetchImages from "./hooks/useFetchImages";

function App() {
  const apiKey = "live_iSkbja9U8JTdP2QwSPDcodkad8ieGzRbCcXuhnwJNByS3PGWwESiMy91WYE4dU2U";
  const limit = 3;
  const { imageUrl, imageId } = useFetchImages(apiKey, limit);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center w-fit">
        <h1 className="mb-10">Memory Game</h1>
        <div className="flex justify-center gap-2">
          <ImageContainer imageUrl={imageUrl} imageId={imageId} />
        </div>
      </div>
    </div>
  );
}

export default App;
