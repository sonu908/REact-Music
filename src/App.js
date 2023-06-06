import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Homepage/Home";
import Spotify from "./Components/SpotifyAuth/Spotify";
import { useEffect, useState } from "react";
import { setClienttoken } from "./Axiosspotify";

function App() {
  //this is the page where we check where to redirect , like if token is availabale it redirects to home page else login page

  const [token, usetoken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let _token = window.localStorage.getItem("token");

    if (!token && hash) {
      _token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", _token);
      usetoken(_token);

      setClienttoken(_token);
    }
  }, []);
  return (
    <div className="App">
      {token ? (
        <Home />
      ) : (
        <Routes>
          <Route path="/" element={<Spotify />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
