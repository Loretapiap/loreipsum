import Navbar from "./components/navbar/NavBar";
import Carousel from "./components/carousel";
import ItemListContainer from "./components/container/ItemListContainer";
import ItemDetailContainer from "./components/container/items/detail/itemDetailContainer";
import Footer from "./components/footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import ButtonFc from "./components/BaseComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/category/:slug">
            <ItemListContainer />
          </Route>
          {/* product detail */}
          <Route path="/product/:id">
            <ItemDetailContainer/>
          </Route>
          {/* home */}
          <Route exact path="/">
            <Carousel />
            <ItemListContainer />
          </Route>
          {/* otherwise */}
          <Route path="/">
            <div>404</div>
          </Route>
        </Switch>

        <Footer />
        {/* <ButtonFc text={'es un prop'} color={'red'} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
