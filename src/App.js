import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./components/ItemCount/ItemCount";
import WsBtn from "./components/WaBtn/WaBtn";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title="Tienda" />
      <ItemCount stock={5} initial={1} />
      <Footer />
      <WsBtn />
    </div>
  );
}

export default App;
