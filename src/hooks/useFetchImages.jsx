import { useState, useEffect } from "react";

function useFetchImages(apiKey, limit) {
  const [fetchedImages, setFetchedImages] = useState([]);
  const link = `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&limit=${limit}&has_breeds=false&`;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(link, {
          headers: {
            "x-api-key": apiKey,
          },
        });
        const data = await response.json();
        // filter images that are bigger than 300x300px
        const filtered = data.filter(
          (image) => image.width >= 300 && image.height >= 300
        );
        setFetchedImages(
          filtered.map((image) => ({
            url: image.url,
            id: image.id,
          }))
        );
      } catch (error) {
        console.error("Error fetching images", error);
      }
    };

    fetchImages();
  }, [link, apiKey]);

  return fetchedImages;
}

export default useFetchImages;
