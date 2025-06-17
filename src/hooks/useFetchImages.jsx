import { useState, useEffect } from "react";

function useFetchImages(apiKey, totalNeeded, batchSize) {
  const [fetchedImages, setFetchedImages] = useState([]);

  useEffect(() => {
    let cancelled = false; // Flag to track if the component is unmounted

    const fetchBatch = async () => {
      const link = `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&limit=${batchSize}&has_breeds=false&`;
      try {
        const response = await fetch(link, {
          headers: {
            "x-api-key": apiKey,
          },
        });
        const data = await response.json();
        const imgObj = data.map((image) => ({
          id: image.id,
          url: image.url,
        }));

        setFetchedImages((prev) => {
          const newImages = [...prev, ...imgObj];
          // If we still need more, fetch again
          if (!cancelled && newImages.length < totalNeeded) {
            setTimeout(fetchBatch, 0);
          }
          return newImages.slice(0, totalNeeded); // Ensure we only keep the needed number of images
        });


      } catch (error) {
        console.error("Error fetching images", error);
      } 

    };

    fetchBatch();

    return () => {
      cancelled = true; // Set the flag to true when the component unmounts
    };
  }, [apiKey, totalNeeded, batchSize]);

  return fetchedImages;
}

export default useFetchImages;
