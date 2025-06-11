# Memory Game

A React-based memory game using unique cat images from [The Cat API](https://thecatapi.com/).

## Features

- **Unique Images Every Game:**  
  Each play session fetches a fresh set of cat images from The Cat API, ensuring a unique experience every time.

- **Background Image Caching:**  
  Up to 50 images are fetched and preloaded in the background. This means users experience instant image display with no visible loading during gameplay.

- **Responsive & Smooth Gameplay:**  
  The user can start the game even while images are still loading. Images continue to load in the background and are typically ready before the first round is completed, ensuring seamless play.

## How It Works

- All image URLs are preloaded in the background using JavaScript's `Image` object.  
- The game is designed so that images are cached by the browser, providing a smooth and responsive experience with no delays as you play.

## Tech Stack

- React
- Tailwind CSS
- [The Cat API](https://thecatapi.com/)

## Running the App

1. Clone the repository.
2. Run `npm install`.
3. Run `npm start` to launch the app.

---

Enjoy playing and testing your memory with adorable cats!