import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Sidebar from "./components/Sidebar";
import Home from "./components/Navbar";
import SongSection from "./components/SongSection";

function App() {
  return (
    <Container fluid className="App-header">
      <Row>
        <Sidebar />
        <div className="col-12 col-md-9 offset-md-3 mainPage">
          <Home />
          <SongSection artistName={"queen"} />
          <SongSection artistName={"katyperry"} />
          <SongSection artistName={"eminem"} />
        </div>
      </Row>
    </Container>
  );
}

export default App;
