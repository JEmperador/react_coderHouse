import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import WsBtn from "./components/WaBtn/WaBtn";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Page404 from "./components/Page404/Page404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer title="Tienda" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer title="Filtrado"/>} />
          <Route path="/detail/:detailId" element={<ItemDetailContainer title="Detalle" />} />
          <Route path="*" element={<Page404 />}/>
        </Routes>
        <Footer />
        <WsBtn />
      </BrowserRouter>
    </div>
  );
}

export default App;
