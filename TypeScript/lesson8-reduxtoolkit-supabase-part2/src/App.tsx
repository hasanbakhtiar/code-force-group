import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./pages/client/ProductList";
import AddProduct from "./pages/admin/product/AddProduct";
import { Container } from "react-bootstrap";
import EditProduct from "./pages/admin/product/EditProduct";
import Dashboard from "./pages/admin/Dashboard";
import AddCategory from "./pages/admin/category/AddCategory";
import EditCategory from "./pages/admin/category/EditCategory";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<ProductList />}></Route>
          <Route path="/addproduct" element={<AddProduct />}></Route>
          <Route path="/addcategory" element={<AddCategory />}></Route>
          <Route path="/editcategory/:id" element={<EditCategory />}></Route>
          <Route path="/editproduct/:id" element={<EditProduct />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
