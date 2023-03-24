import axios from "axios";
const getSimilarArtistsByArtist = async (artist: string) => {
  let data = await axios.get(
   'https://ws.audioscrobbler.com/2.0/',{
        params: {
            method: "artist.getsimilar",
            artist: artist,
            api_key: "e7a4bc942f84ca7a50b16e90c0afb5e4",
            format: "json",
        },
   }
  );
  return data.data.similarartists;
};

export default getSimilarArtistsByArtist;