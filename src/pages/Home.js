import React, { useState, useEffect } from "react";
import "./Home.css"; // Adjust the path based on your file structure
import axios from "axios";

const Home = () => {
  const [shows, setShows] = useState([]); // Initial list
  const [newShow, setNewShow] = useState(""); // For the input field

  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = async () => {
    const response = await axios.get("http://localhost:3306/shows");
    setShows(response.data);
  };

  // Function to add a new show
  const addShow = async () => {
    if (!newShow.trim()) return; // Also prevent strings that are just whitespace
    try {
      const response = await axios.post("http://localhost:3306/shows", {
        title: newShow,
      });
      setShows([...shows, response.data]);
      setNewShow(""); // Reset input field after successful add
    } catch (error) {
      console.error("Error adding show:", error);
      // Handle error (e.g., show a message to the user)
    }
  };

  // Function to add a new show with "Enter" key
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      addShow();
    }
  };

  // Function to delete a show
  const deleteShow = async (id) => {
    try {
      // Make a DELETE request to your backend
      await axios.delete(`http://localhost:3306/shows/${id}`);
      // Filter out the show that was just deleted and update local state
      const updatedShows = shows.filter((show) => show.id !== id);
      setShows(updatedShows);
    } catch (error) {
      console.error("Error deleting show:", error);
      // Handle error (e.g., show a message to the user)
    }
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

      <ul class="list">
        {shows.map((show) => (
          <li class="listblock" key={show.id}>
            {show.title} {/* Render the title property of each show */}
            <button id="deletebtn" onClick={() => deleteShow(show.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
