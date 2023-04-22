
import "./App.css";
import { Container } from "@mui/system";
import NavBar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import Games from "./components/games/Games";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Games />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
