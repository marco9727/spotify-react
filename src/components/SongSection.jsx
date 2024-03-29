import Loading from "./Loading";
import SingleSong from "./SingleSong";
import { useEffect, useState } from "react";

const SongSection = ({ artistName, sectionTitle }) => {
  const [musicData, setMusicData] = useState([]);

  const fetchSongs = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
        artistName,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key":
            "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error in fetching songs");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (Array.isArray(data.data)) {
          const initialData = data.data
            .sort(() => Math.random() - 0.5)
            .slice(0, 6);
          setMusicData(initialData);
        } else {
          throw new Error("Array 'songs' not found in data");
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    fetchSongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row">
      <div className="col-10">
        <div id="rock">
          <h2>{sectionTitle}</h2>
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
            id="rockSection"
          >
            {musicData && musicData.length > 0 ? (
              musicData.map((song, index) => (
                <SingleSong key={index} songInfo={song} />
              ))
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongSection;
