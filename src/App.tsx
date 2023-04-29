
import { Container } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
// import Profile from "./components/Profile";
// import { GameDetail } from "./components/games/GameDetail";
// import Games from "./components/games/Games";
import NavBar from "./components/navbar/NavBar";
import { Login } from "./components/access/Login";
//import { Test } from "./components/Test";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/" element={<Games />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/games/:gameId" element={<GameDetail />} /> */}
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
