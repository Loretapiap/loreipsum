import Navbar from "./components/NavBar";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
// import ButtonFc from "./components/BaseComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <Footer/>
      {/* <ButtonFc text={'es un prop'} color={'red'} /> */}
    </div>
  );
}

export default App;
