import ImageContainer from "./Components/ImageContainer";
import useFetchImages from "./hooks/useFetchImages";

function App() {
  const apiKey =
    "live_iSkbja9U8JTdP2QwSPDcodkad8ieGzRbCcXuhnwJNByS3PGWwESiMy91WYE4dU2U";
  const limit = 33;
  const { imageUrl, imageId } = useFetchImages(apiKey, limit);
  // console.log(imageId);

  // const imageUrl = [
  //   "https://cdn2.thecatapi.com/images/3lj.jpg",
  //   "https://cdn2.thecatapi.com/images/3to.jpg",
  //   "https://cdn2.thecatapi.com/images/487.jpg",
  //   "https://cdn2.thecatapi.com/images/4m2.jpg",
  //   "https://cdn2.thecatapi.com/images/5p6.jpg",
  //   "https://cdn2.thecatapi.com/images/6fd.jpg",
  //   "https://cdn2.thecatapi.com/images/6uq.jpg",
  //   "https://cdn2.thecatapi.com/images/8fr.png",
  //   "https://cdn2.thecatapi.com/images/8g1.jpg",
  //   "https://cdn2.thecatapi.com/images/98d.jpg",
  //   "https://cdn2.thecatapi.com/images/99k.jpg",
  //   "https://cdn2.thecatapi.com/images/9sm.jpg",
  //   "https://cdn2.thecatapi.com/images/a3r.jpg",
  //   "https://cdn2.thecatapi.com/images/aa4.jpg",
  //   "https://cdn2.thecatapi.com/images/abf.jpg",
  //   "https://cdn2.thecatapi.com/images/b5a.jpg",
  //   "https://cdn2.thecatapi.com/images/b7h.jpg",
  //   "https://cdn2.thecatapi.com/images/bdd.jpg",
  //   "https://cdn2.thecatapi.com/images/bfb.jpg",
  //   "https://cdn2.thecatapi.com/images/bjl.jpg",
  //   "https://cdn2.thecatapi.com/images/bpg.jpg",
  //   "https://cdn2.thecatapi.com/images/cdc.jpg",
  //   "https://cdn2.thecatapi.com/images/dmo.jpg",
  //   "https://cdn2.thecatapi.com/images/e3i.jpg",
  //   "https://cdn2.thecatapi.com/images/MTU1NDcwOA.jpg",
  //   "https://cdn2.thecatapi.com/images/MTY0NTk1MQ.jpg",
  //   "https://cdn2.thecatapi.com/images/MTc2Mzc0Mw.jpg",
  //   "https://cdn2.thecatapi.com/images/MTk0Njc0MQ.jpg",
  //   "https://cdn2.thecatapi.com/images/lJHXU7DlQ.jpg",
  //   "https://cdn2.thecatapi.com/images/d8AjzQxLp.jpg",
  //   "https://cdn2.thecatapi.com/images/O1X8xKt_H.jpg",
  //   "https://cdn2.thecatapi.com/images/tSbM4vHB_.png",
  //   "https://cdn2.thecatapi.com/images/MmiojCuKC.jpg",
  // ];
  // const imageId = [
  //   "3lj",
  //   "i4",
  //   "o7",
  //   "23q",
  //   "43q",
  //   "7rh",
  //   "8cd",
  //   "9r0",
  //   "aau",
  //   "ad1",
  //   "af7",
  //   "ahr",
  //   "akc",
  //   "ar1",
  //   "b2n",
  //   "b3p",
  //   "cv6",
  //   "cvd",
  //   "df4",
  //   "dkq",
  //   "dms",
  //   "dut",
  //   "e9c",
  //   "egb",
  //   "ehi",
  //   "ehn",
  //   "MTUzNzkyNw",
  //   "MTU5MDQ4Nw",
  //   "MjA3OTE1MA",
  //   "wgoLPWPZQ",
  //   "vVF7hE-Py",
  //   "0iSghgPeZ",
  //   "xZysIjSqa",
  // ];

  // Wait for images to load
  if (!imageUrl || !imageId || imageUrl.length === 0 || imageId.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center  h-screen bg-gradient-to-r from-[#f8cdda] to-[#1d2b64]">
         <h1 className="w-full text-center">Memory Game</h1>
        <div className="text-lg mt-4">Loading...</div>

      </div>
    );
  }

  return (
    <div className="flex flex-col gap-15 justify-center h-screen bg-gradient-to-r from-[#f8cdda] to-[#1d2b64]">
      <h1 className="w-full text-center">Memory Game</h1>
      <ImageContainer allImageUrl={imageUrl} allImageId={imageId} />
    </div>
  );
}

export default App;
