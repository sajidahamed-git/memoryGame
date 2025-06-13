import { useEffect, useState } from "react";

function usePreloadImages(fetchedImages, setIsImagesLoaded, batchSize) {
  // fetchedImages is now an array of objects: { url, id }
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    if (!fetchedImages || fetchedImages.length === 0) return;
    let loaded = loadedImages.length; // Start from already loaded
    let currentIndex = loadedImages.length;

    const loadBatch = () => {
      const batch = fetchedImages.slice(currentIndex, currentIndex + batchSize);
      let batchLoaded = 0;

      batch.forEach((imgObj) => {
        // Skip if already loaded
        if (loadedImages.some(img => img.id === imgObj.id)) {
          console.log('img alreadyloaded');
          
          loaded++;
          batchLoaded++;
          if (loaded === fetchedImages.length) {
            setIsImagesLoaded(true);
          } else if (batchLoaded === batch.length) {
            currentIndex += batchSize;
            loadBatch();
          }
          return;
        }
        const img = new window.Image();
        img.onload = img.onerror = () => {
          loaded++;
          batchLoaded++;
          setLoadedImages((prev) =>
            prev.some(img => img.id === imgObj.id)
              ? prev
              : [...prev, imgObj]
          );
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