import { useState, useEffect, useRef } from "react";

function useFetchImages(totalNeeded, batchSize) {
  const apiKeyRef = useRef("live_iSkbja9U8JTdP2QwSPDcodkad8ieGzRbCcXuhnwJNByS3PGWwESiMy91WYE4dU2U");
  const [fetchedImages, setFetchedImages] = useState([]);
  const countRef = useRef(0);

  useEffect(() => {
    const fetchBatch = async () => {
        //if the count is greater than the totalNeeded, return
      if (countRef.current >= totalNeeded) return;

      const link = `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&limit=${batchSize}&has_breeds=false&`;
      try {
        const response = await fetch(link, {
          headers: {
            "x-api-key": apiKeyRef.current,
          },
        });
        const data = await response.json();
        const imgObj = data.map((image) => ({
          id: image.id,
          url: image.url,
        }));
        
        setFetchedImages((prev) => {
          const newImages = [...prev, ...imgObj];
          countRef.current = newImages.length;
          return newImages;
        });

        if (countRef.current < totalNeeded) {
          setTimeout(fetchBatch, 0);
        }
      } catch (error) {
        console.error("Error fetching images", error);
      }
    };

    // Reset count when totalNeeded or batchSize changes
    countRef.current = 0;
    setFetchedImages([]);
    fetchBatch();

    return () => {
      countRef.current = 0;
    };
  }, [totalNeeded, batchSize]); // Removed fetchedImages from dependencies

  return fetchedImages;
}

export default useFetchImages;
