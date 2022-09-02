import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import WsBtn from "./components/WaBtn/WaBtn";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import CartListContainer from "./containers/CartListContainer/CartListContainer";
import FormBuyerContainer from "./containers/FormBuyerContainer/FormBuyerContainer";
import Page404 from "./components/Page404/Page404";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer title="Tienda" />} />
            <Route path="/category/:categoryId" element={<ItemListContainer title="Filtrado por" />} />
            <Route path="/detail/:detailId" element={<ItemDetailContainer title="Detalle" />} />
            <Route path="/cart" element={<CartListContainer title="Su Orden" />} />
            <Route path="/checkout" element={<FormBuyerContainer title="Datos de comprador" />} />
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
