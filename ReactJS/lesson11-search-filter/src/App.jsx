import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Header from "./components/Header"
import Products from "./pages/Products"
import NotFoundPage from "./pages/NotFoundPage"
import ProductDetails from "./pages/ProductDetails"
import Basket from "./pages/Basket"
import { useContext } from "react"
import { ModeContext } from "./context/ModeContext"


const Main = ()=>{
    const [mode] = useContext(ModeContext);
    return(
        <div className={mode}>
            <Header />
            <div className="container">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/products/:slug" element={<ProductDetails />}></Route>
                <Route path="/cart" element={<Basket />}></Route>
                <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
            </div>
        </div>
    )
}

const App = () => {
    return (
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    )
}

export default App