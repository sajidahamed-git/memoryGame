import ImageContainer from "./Components/ImageContainer";
// import useFetchImages from "./hooks/useFetchImages";

function App() {
  // const apiKey =
  // "live_iSkbja9U8JTdP2QwSPDcodkad8ieGzRbCcXuhnwJNByS3PGWwESiMy91WYE4dU2U";
  // const limit = 12;
  // const {imageUrl,imageId} = useFetchImages(apiKey, limit);

  const imageUrl = [
    "https://cdn2.thecatapi.com/images/1pb.jpg",
    "https://cdn2.thecatapi.com/images/2bh.jpg",
    "https://cdn2.thecatapi.com/images/6fd.jpg",
    "https://cdn2.thecatapi.com/images/6na.jpg",
    "https://cdn2.thecatapi.com/images/a2o.jpg",
    "https://cdn2.thecatapi.com/images/a7g.jpg",
    "https://cdn2.thecatapi.com/images/bit.jpg",
    "https://cdn2.thecatapi.com/images/d74.jpg",
    "https://cdn2.thecatapi.com/images/MTY3OTg4Nw.jpg",
    "https://cdn2.thecatapi.com/images/MTk3ODU4MQ.jpg",
    "https://cdn2.thecatapi.com/images/C0BNiXO0T.jpg",
    "https://cdn2.thecatapi.com/images/DYOqsRy9f.jpg",
  ];
  const imageId = [
    "1pb",
    "2bh",
    "6fd",
    "6na",
    "a2o",
    "a7g",
    "bit",
    "d74",
    "MTY3OTg4Nw",
    "MTk3ODU4MQ",
    "C0BNiXO0T",
    "DYOqsRy9f",
  ];

  // Wait for images to load
  if (!imageUrl || !imageId || imageUrl.length === 0 || imageId.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center  h-screen bg-gradient-to-r from-[#f8cdda] to-[#1d2b64]">
        // <h1 className="w-full text-center">Memory Game</h1>
        // <div className="text-lg mt-4">Loading...</div>
        //{" "}
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center h-screen bg-gradient-to-r from-[#f8cdda] to-[#1d2b64]">
      <h1 className="w-full text-center">Memory Game</h1>
      <ImageContainer allImageUrl={imageUrl} allImageId={imageId} />
    </div>
  );
}

export default App;
