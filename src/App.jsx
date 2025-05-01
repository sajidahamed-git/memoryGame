import { useState, useEffect } from "react";
import ImageContainer from "./Components/ImageContainer";

function App() {
  const [imageUrl, setImageUrl] = useState([])
  const link = `https://api.thecatapi.com/v1/images/search?limit=`;
  const api_key =
    "live_iSkbja9U8JTdP2QwSPDcodkad8ieGzRbCcXuhnwJNByS3PGWwESiMy91WYE4dU2U";
  const noOfImages = "3";
  const url = link + noOfImages;

  const fetchImages = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          "x-api-key": api_key,
        },
      });
      const data = await response.json();
      setImageUrl(data.map((image) => image.url));
      
      console.log(data);
    } catch (error) {
      console.error("Error fetching images", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);


  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center w-fit">
        <h1 className="mb-10">Memory Game</h1>
        <div className="flex flex-wrap gap-2">
          <ImageContainer imageUrl={imageUrl} />
        </div>
      </div>
    </div>
  );
}

export default App;
