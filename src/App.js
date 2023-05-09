import { Route, Routes } from "react-router-dom";
import "./styles/App.css";

//Pages:
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SignUpPage from "./pages/SingUpPage";
import LogInPage from "./pages/LogInPage";

//Core:
import Nav from "./core/Nav";
import Footer from "./core/Footer";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/login" element={<LogInPage />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
