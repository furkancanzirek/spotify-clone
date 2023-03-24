import axios from "axios";
const getSimilarSongsByArtist = async (artist: string, track: string) => {
  let data = await axios.get(
   'https://ws.audioscrobbler.com/2.0/',{
        params: {
            method: "track.getsimilar",
            artist: artist,
            track: track,
            api_key: "e7a4bc942f84ca7a50b16e90c0afb5e4",
            format: "json",
        },
   }
  );
  return data.data.similartracks;
};

export default getSimilarSongsByArtist;
