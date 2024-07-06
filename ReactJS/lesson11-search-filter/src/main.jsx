import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/style.css';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from 'react-use-cart';
import { LangProdvider } from './context/LangContact';
import { ModeProvider } from './context/ModeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangProdvider>
      <ModeProvider>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </ModeProvider>
    </LangProdvider>
  </React.StrictMode>,
)
