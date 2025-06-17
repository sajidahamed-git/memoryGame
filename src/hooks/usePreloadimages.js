import { useEffect, useState } from "react";

function usePreloadImages(fetchedImages, setIsImagesLoaded, batchSize) {
  // fetchedImages is now an array of objects: { url, id }
  const [loadedImages, setLoadedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!fetchedImages || fetchedImages.length === 0) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    let loaded = loadedImages.length; // Start from already loaded
    let currentIndex = loadedImages.length;
    let isEffectActive = true;

    const loadBatch = () => {
      if (!isEffectActive) return;

      const batch = fetchedImages.slice(currentIndex, currentIndex + batchSize);
      let batchLoaded = 0;

      batch.forEach((imgObj) => {
        if (!isEffectActive) return;

        // Skip if already loaded
        if (loadedImages.some(img => img.id === imgObj.id)) {
          loaded++;
          batchLoaded++;
          if (loaded === fetchedImages.length) {
            setIsImagesLoaded(true);
            setIsLoading(false);
          } else if (batchLoaded === batch.length) {
            currentIndex += batchSize;
            loadBatch();
          }
          return;
        }

        const img = new window.Image();
        img.onload = img.onerror = () => {
          if (!isEffectActive) return;

          loaded++;
          batchLoaded++;
          setLoadedImages((prev) =>
            prev.some(img => img.id === imgObj.id)
              ? prev
              : [...prev, imgObj]
          );
          if (loaded === fetchedImages.length) {
            setIsImagesLoaded(true);
            setIsLoading(false);
          } else if (batchLoaded === batch.length) {
            currentIndex += batchSize;
            loadBatch();
          }
        };
        img.src = imgObj.url;
      });
    };

    loadBatch();

    return () => {
      isEffectActive = false;
    };
  }, [fetchedImages, batchSize, setIsImagesLoaded, loadedImages]);

  return {
    loadedImages,
    
  };
}

export default usePreloadImages;