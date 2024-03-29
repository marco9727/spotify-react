import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Sidebar from "./components/Sidebar";
import SongSection from "./components/SongSection";
import Navbar from "./components/Navbar";
import SearchSong from "./components/SearchSong";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Container fluid className="App-header">
      <Row>
        <Sidebar onSearch={handleSearch} />
        <div className="col-12 col-md-9 offset-md-3 mainPage">
          <Navbar />
          <SearchSong
            // searchQuery={searchQuery}
            // setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
          />
          <SongSection artistName={"queen"} sectionTitle={"Rock Classics"} />
          <SongSection artistName={"katyperry"} sectionTitle={"Pop Culture"} />
          <SongSection artistName={"eminem"} sectionTitle={"#HipHop"} />
        </div>
      </Row>
    </Container>
  );
}

export default App;
