import { useState, useEffect } from "react";

function App() {
  const [allImages,setAllImages] = useState([]);
  const [displayImages,setDisplayImages] = useState([]);
  const link = `https://api.thecatapi.com/v1/images/search?limit=`;
  const api_key = "live_iSkbja9U8JTdP2QwSPDcodkad8ieGzRbCcXuhnwJNByS3PGWwESiMy91WYE4dU2U";
  const noOfImages = '12';
  const url = link + noOfImages;

  const fetchImages = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          'x-api-key': api_key
        }
      });
      const data = await response.json();
      setAllImages(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching images', error);
    }
  };

  useEffect(() => {
    fetchImages();

  }, []);
  useEffect(() => {
    if (allImages.length >= 3) {
      // Pick the first 3 (or you could randomize selection)
      setDisplayImages(allImages.slice(0, 3));
    }
  }, [allImages]);

  return (
    <>
      <h1 className="mb-10">Memory Game</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {displayImages.map((img, index) => (
          <button><img key={index} src={img.url} alt="cat" width="200" /></button>
        ))}
      </div>
    </>
  );
}

export default App;
