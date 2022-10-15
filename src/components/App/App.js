import {useContext, useEffect, useState} from 'react'
import {Context} from '../../context'
import {getProducts} from '../../requests/api_req'
import NavBar from '../NavBar';
import MainSection from '../MainSection';



function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <Context.Provider value={{products}}>
      <NavBar/>
      <MainSection/>
    </Context.Provider>
  );
}

export default App;
