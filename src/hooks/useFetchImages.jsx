import { useState, useEffect } from "react";

function useFetchImages(apiKey, limit) {
  const [imageUrl, setImageUrl] = useState([]);
  const [imageId, setImageId] = useState([]);
  const link = `https://api.thecatapi.com/v1/images/search?limit=${limit}&mime_types=jpg,png&`;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(link, {
          headers: {
            "x-api-key": apiKey,
          },
        });
        const data = await response.json();
        //filter images that are bigger than 200*200px
        const filtered = data.filter(
          (image) => image.width >= 300 && image.height >= 300
        );
        console.log(filtered);
        setImageUrl(filtered.map((image) => image.url));
        setImageId(filtered.map((image) => image.id));
      } catch (error) {
        console.error("Error fetching images", error);
      }
    };

    fetchImages();
  }, [link, apiKey]);

  return { imageUrl, imageId };
}

export default useFetchImages;
