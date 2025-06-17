import { useState, useEffect, useRef } from "react";

function useFetchImages(totalNeeded, batchSize) {
  //const apiKeyRef = useRef("live_iSkbja9U8JTdP2QwSPDcodkad8ieGzRbCcXuhnwJNByS3PGWwESiMy91WYE4dU2U");
  const [fetchedImages, setFetchedImages] = useState([]);
  const countRef = useRef(0);

  useEffect(() => {
    const fetchBatch = async () => {
      if (countRef.current >= totalNeeded) return;

      const link = `https://dog.ceo/api/breeds/image/random/${batchSize}`;
      try {
        const response = await fetch(link);
        const data = await response.json();
        
        if (data.status === "success") {
          const imgObj = data.message.map((url, index) => ({
            id: `dog-${countRef.current + index}`, // Generate unique IDs
            url: url
          }));
          
          setFetchedImages((prev) => {
            const newImages = [...prev, ...imgObj];
            countRef.current = newImages.length;
            return newImages;
          });

          if (countRef.current < totalNeeded) {
            setTimeout(fetchBatch, 0);
          }
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
