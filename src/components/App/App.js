import {useContext, useEffect, useState} from 'react'
import {Context} from '../../context'
import {getProducts} from '../../requests/api_req'
import NavBar from '../NavBar';
import MainSection from '../MainSection';
import Services from '../Services';
import ProductContainer from '../ProductContainer';



function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <Context.Provider value={{products}}>
      <NavBar/>
      <MainSection/>
      <Services/>
      <ProductContainer/>
    </Context.Provider>
  );
}

export default App;
