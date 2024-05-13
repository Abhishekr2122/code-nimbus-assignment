import "./app.css";
import "../src/components/NavBar";
import NavBar from "../src/components/NavBar";
import HomeContainer from "./components/HomeContainer";
function App() {
  return (
    <div className="App">
      <section className="header-section">
        <NavBar />
        <HomeContainer />
      </section>
      <section className="couple-section"></section>
    </div>
  );
}

export default App;
