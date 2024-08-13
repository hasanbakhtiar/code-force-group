import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import { Container } from "react-bootstrap";
import EditProduct from "./pages/EditProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<ProductList />}></Route>
          <Route path="/addproduct" element={<AddProduct />}></Route>
          <Route path="/editproduct/:id" element={<EditProduct />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
