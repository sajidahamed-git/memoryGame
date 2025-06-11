import { useEffect } from "react";

function usePreloadImages(imageUrl,setImagesLoaded) {

  useEffect(() => {
    if (!imageUrl || imageUrl.length === 0) return;
    let loaded = 0;
    imageUrl.forEach((url) => {
      const img = new window.Image();
      img.onload = () => {
        loaded++;
        if (loaded === imageUrl.length) setImagesLoaded(true);
      };
      img.onerror = () => {
        loaded++;
        if (loaded === imageUrl.length) setImagesLoaded(true);
      };
      img.src = url;
    });
  }, [imageUrl, setImagesLoaded]);
}

export default usePreloadImages;
