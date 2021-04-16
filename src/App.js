import Navbar from "./components/navbar/NavBar";
import ItemListContainer from "./components/container/ItemListContainer";
import Footer from "./components/footer";
// import ButtonFc from "./components/BaseComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={'Cambio de color con un click :)'}/>
      <Footer/>
      {/* <ButtonFc text={'es un prop'} color={'red'} /> */}
    </div>
  );
}

export default App;
