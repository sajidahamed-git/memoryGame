import { useEffect, useState } from "react";

function usePreloadImages(fetchedImages, setIsImagesLoaded, batchSize = 5) {
  // fetchedImages is now an array of objects: { url, id }
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    if (!fetchedImages || fetchedImages.length === 0) return;
    let loaded = 0;
    let currentIndex = 0;

    const loadBatch = () => {
      const batch = fetchedImages.slice(currentIndex, currentIndex + batchSize);
      let batchLoaded = 0;

      batch.forEach((imgObj) => {
        const img = new window.Image();
        img.onload = img.onerror = () => {
          loaded++;
          batchLoaded++;
          setLoadedImages((prev) => [...prev, imgObj]);
          if (loaded === fetchedImages.length) {
            setIsImagesLoaded(true);
          } else if (batchLoaded === batch.length) {
            currentIndex += batchSize;
            loadBatch();
          }
        };
        img.src = imgObj.url;
      });
    };

    loadBatch();
    // eslint-disable-next-line
  }, [fetchedImages, batchSize, setIsImagesLoaded]);

  return {
    loadedImages,
  };
}

export default usePreloadImages;
