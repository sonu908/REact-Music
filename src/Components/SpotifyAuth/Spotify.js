import { useEffect, useState } from "react";

import React from "react";

function Spotify() {
  const client_id = "bf31a52e5ea64f4889f9d80893aa70a4";
  const redirecturl = "http://localhost:3000/";
  const auth_url = "https://accounts.spotify.com/authorize";
  const response = "token";


  return (
    <div>
      <h1 className="text-5xl">spotify clone</h1>

      <a
        href={`${auth_url}?client_id=${client_id}&redirect_uri=${redirecturl}&response_type=${response}`}
      >
        <button className="rounded-full bg-red-800 text-2xl p-5 mt-5" >login</button>
      </a>
    </div>




  );
}

export default Spotify;
