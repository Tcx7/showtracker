import React, { useState, useEffect } from "react";
import Home from "../pages/Home";

const Imagesearch = ({ initialSearchTerm, onSearchComplete }) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm || "");
  const [imageUrl, setImageUrl] = useState("");

  const handleSearch = async () => {
    try {
      const apiKey = "AIzaSyDsKSTwcKzsyZzpb2OhGqPh_MwMGli_W0E"; // Replace with your Google Custom Search API key
      const searchEngineId = "b26150355b1ea4ece"; // Replace with your Google Custom Search Engine ID
      const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&searchType=image&q=${encodeURIComponent(
        searchTerm
      )}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        setImageUrl(data.items[0].link);
      } else {
        setImageUrl("");
        console.log("No image found");
        alert("Api call maxed");
      }
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> */}
      {/* {handleSearch} */}
      <button onClick={handleSearch}>Give me image! >:( </button>
      {imageUrl && (
        <div>
          <img src={imageUrl} alt="First Result" />
        </div>
      )}
    </div>
  );
};

export default Imagesearch;
