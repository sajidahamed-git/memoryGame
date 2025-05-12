import { useState, useEffect } from "react";

function useFetchImages(apiKey, limit) {
  const [imageUrl, setImageUrl] = useState([]);
  const [imageId, setImageId] = useState([]);
  const link = `https://api.thecatapi.com/v1/images/search?limit=${limit}`;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(link, {
          headers: {
            "x-api-key": apiKey,
          },
        });
        const data = await response.json();
        setImageUrl(data.map((image) => image.url));
        setImageId(data.map((image) => image.id));
      } catch (error) {
        console.error("Error fetching images", error);
      }
    };

    fetchImages();
  }, [link, apiKey]);

  return { imageUrl, imageId };
}

export default useFetchImages;