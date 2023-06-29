import { products as initialProducts } from './mocks/products.json';

import { IS_DEVELOPMENT } from './config.js';
import { useFilters } from './hooks/useFilters.js';
import { CartProvider } from './context/cart.jsx';

import Header from './components/Header.jsx';
import Products from './components/Products.jsx';
import Cart from './components/Cart.jsx';
import Footer from './components/Footer.jsx';


function App () {
  
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  );

}

export default App