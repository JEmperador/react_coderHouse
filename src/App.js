import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import WsBtn from "./components/WaBtn/WaBtn";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Page404 from "./components/Page404/Page404";
import CartListContainer from "./containers/CartListContainer/CartListContainer";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer title="Tienda" />} />
            <Route path="/category/:categoryId" element={<ItemListContainer title="Filtrado" />} />
            <Route path="/detail/:detailId" element={<ItemDetailContainer title="Detalle" />} />
            <Route path="/cart" element={<CartListContainer title="Su Orden" />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
          <WsBtn />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
