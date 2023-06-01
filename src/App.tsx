
import { Container } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import ForgotPasswordStepper from "./components/access/ForgotPasswordStepper";
import { Login } from "./components/access/Login";
import { GameDetail } from "./components/games/GameDetail";
import Games from "./components/games/Games";
import NavBar from "./components/navbar/NavBar";
import { FOOTER_HEIGHT, Footer } from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Container sx={{mb: "140px", minHeight: `calc(100vh - ${FOOTER_HEIGHT})`}}>
        <Routes>
          <Route path="/" element={<Games />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<ForgotPasswordStepper />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/games/:gameId" element={<GameDetail />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
