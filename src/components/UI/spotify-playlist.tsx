import React from "react";

const SpotifyPlaylist = () => {
    return ( <div>
        <h1 className="text-center font-bold text-3xl mb-4" id="spotify-heading">
          Spotify Playlist
        </h1>
        <iframe
          title="spotify playlist"
          className="rounded-2xl"
          src="https://open.spotify.com/embed/playlist/3g1wkGVS4b2vuhrTEOKGej?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          id="player"
        ></iframe>
      </div> );
}
 
export default SpotifyPlaylist;