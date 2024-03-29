import { useEffect, useState } from "react";
import SingleSong from "./SingleSong";

const SearchSong = ({ searchQuery }) => {
  //   const [searchQuery, setSearchQuery] = useState("");
  const [musicResults, setMusicResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const fetchSearchSong = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`,
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
          const initialData = data.data.slice(0, 10);
          setMusicResults(initialData);
        } else {
          throw new Error("Array 'songs' not found in data");
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    if (searchQuery) {
      fetchSearchSong();
      setShowResults(true);
    } else {
      setShowResults(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <div className="row">
      <div className="col-10">
        <div
          id="searchResults"
          style={{ display: showResults ? "block" : "none" }}
        >
          <h2>Search Results</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            {musicResults && musicResults.length > 0 ? (
              musicResults.map((song, index) => (
                <SingleSong key={index} songInfo={song} />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSong;
