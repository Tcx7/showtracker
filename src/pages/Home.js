import React, { useState } from "react";
import "./Home.css"; // Adjust the path based on your file structure

const Home = () => {
  const [shows, setShows] = useState([]); // Initial list
  const [newShow, setNewShow] = useState(""); // For the input field

  // Function to add a new show
  const addShow = () => {
    if (!newShow) return; // Prevent adding empty strings
    setShows([...shows, newShow]);
    setNewShow(""); // Reset input field
  };

  // Function to add a new show with "Enter" key
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      addShow();
    }
  };

  // Function to delete a show
  const deleteShow = (index) => {
    const updatedShows = shows.filter((show, i) => i !== index);
    setShows(updatedShows);
  };

  return (
    <div className="home">
      <h1>Welcome to My Show Tracker</h1>
      <p>Keep track of all your favorite shows and animes in one place.</p>

      {/* Input field and Add button */}
      <input
        type="text"
        value={newShow}
        onChange={(e) => setNewShow(e.target.value)}
        placeholder="Add new show"
        onKeyDown={handleEnter}
      />
      <button onClick={addShow}>Add Show</button>

      <ul>
        {shows.map((show, index) => (
          <li key={index}>
            {show}
            <button onClick={() => deleteShow(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
