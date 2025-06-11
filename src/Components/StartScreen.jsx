import clsx from "clsx";
import GithubLink from "./GithubLink";

export default function StartScreen({
    setIsGameStarted,
    setRenderCount,
    imagesLoaded = false, // Default to false if not provided
}) {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-[#f8cdda] to-[#1d2b64]">
      <h1 className="w-full text-center">Memory Game</h1>
      <div className="text-lg text-center text-amber-950 mt-4">
        Welcome to the Memory Game! Test your memory by clicking on images.
        <br />
        Avoid clicking the same image twice, or you'll lose!
        <br />
        Click the button below to start the game and choose the difficulty
        level.
        <br />
        you can wait for the buttons to turn green if you want to play after the
        images are loaded.
      </div>
      <div className="w-full flex flex-col items-center mt-4">
        <div className="">Choose the difficult level</div>
        <div className="flex gap-4 mt-2">
          <button
            className={clsx(
              //button should be blue if imagesloaded is false and green if true
              "mt-4 py-2 px-6 rounded transition-colors duration-300 text-white",
              imagesLoaded
                ? "bg-green-500 hover:bg-green-600 "
                : "bg-blue-500 hover:bg-blue-600"
            )}
            onClick={() => setIsGameStarted(true) || setRenderCount(3)}
          >
            Easy
          </button>
          <button
            className={clsx(
              //button should be blue if imagesloaded is false and green if true
              "mt-4 py-2 px-6 rounded transition-colors duration-300 text-white",
              imagesLoaded
                ? "bg-green-500 hover:bg-green-600 "
                : "bg-blue-500 hover:bg-blue-600"
            )}
            onClick={() => setIsGameStarted(true) || setRenderCount(5)}
          >
            Hard
          </button>
        </div>
      </div>
      <GithubLink />
    </div>
  );
}
