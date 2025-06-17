import clsx from "clsx";
import GithubLink from "./GithubLink";

export default function StartScreen({
  setIsGameStarted,
  setRenderCount,
  imagesLoaded = false, // Default to false if not provided
  setDifficulty,
}) {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-[#f8cdda] to-[#1d2b64]">
      <h1 className="w-full text-center text-4xl font-bold text-gray-800 drop-shadow mb-6">
        Memory Game
      </h1>
      <div className="text-lg text-center text-amber-950 bg-white/70 rounded-lg shadow p-6 mb-6 max-w-xl">
        <p className="mb-2">
          <span className="font-semibold">Welcome to the Memory Game!</span>{" "}
          Test your memory by clicking on images.
        </p>
        <p className="mb-2">
          <span className="font-semibold">
            Avoid clicking the same image twice
          </span>
          , or you'll lose!
        </p>
        <p className="mb-2">
          Click a button below to start the game and choose your difficulty
          level.
        </p>
        <p className="italic text-sm text-amber-800">
          For the smoothest experience, wait for the buttons to turn green—this
          means all images are loaded!
        </p>
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
            onClick={() => {
              setIsGameStarted(true);
              setRenderCount(3);
              setDifficulty("easy");
            }}
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
            onClick={() => {
              setIsGameStarted(true);
              setRenderCount(5);
              setDifficulty("hard");
            }}
          >
            Hard
          </button>
        </div>
      </div>
      <GithubLink />
    </div>
  );
}
