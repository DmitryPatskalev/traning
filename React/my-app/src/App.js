import "./App.css";
import Header from "./components/JSX/Header";
import Navbar from "./components/JSX/Navbar";
import Profile from "./components/JSX/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
