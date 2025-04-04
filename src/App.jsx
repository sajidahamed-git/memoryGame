import "./App.css";
import { useState, useEffect } from 'react'; // Import useState and useEffect
function App() {
  const [imageUrl, setImageUrl] = useState(''); // State to store the image URL
  const api_key =
    "";
  const url = `https://api.thecatapi.com/v1/images/search?limit=3`;

  useEffect(() => {
    
    fetch(url, { headers: { "x-api-key": api_key } }) 
    .then((response) => {
    
      return response.json();
    })
    .then((data) => {
      console.log(data); // Now you have the actual JSON data
      setImageUrl(data)
      // You can now store this data in a state variable and use it to render your UI
    })
    .catch((error) => {
      console.error("Could not fetch the breeds:", error);
    });

  }, [])


  return (
    <>
      <h1>Vite</h1>
      <div className="flex gap-4">
        {imageUrl ? <img src={imageUrl[0].url} className="w-2xs" alt="Random Cat" /> : <p>Loading cat image...</p>}
        {imageUrl ? <img src={imageUrl[1].url} className="w-2xs" alt="Random Cat" /> : <p>Loading cat image...</p>}
        {imageUrl ? <img src={imageUrl[2].url} className="w-2xs" alt="Random Cat" /> : <p>Loading cat image...</p>}
      </div>

      {/* You can eventually display the fetched data here */}
    </>
  );
}

export default App;