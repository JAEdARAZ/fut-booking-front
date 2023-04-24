
import "./App.css";
import { Container } from "@mui/system";
import NavBar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import Games from "./components/games/Games";
import Profile from "./components/Profile";
import { GameDetail } from "./components/games/GameDetail";
//import { Test } from "./components/Test";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Games />} />
          {/* <Route path="/" element={<Test />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/games/:gameId" element={<GameDetail />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
