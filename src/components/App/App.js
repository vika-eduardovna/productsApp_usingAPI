import { useEffect, useState } from 'react'
import { Context } from '../../context'
import { getProducts, deleteProduct } from '../../requests/api_req'
import NavBar from '../NavBar';
import MainSection from '../MainSection';
import Services from '../Services';
import ProductContainer from '../ProductContainer';


function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  const removeProd = id => {
    setProducts(products.filter(item => item.id !== id));
    deleteProduct(console.log, id)
  }

  return (
    <Context.Provider value={{ products, removeProd }}>
      <NavBar />
      <MainSection />
      <Services />
      <ProductContainer />
    </Context.Provider>
  );
}

export default App;
