
import './App.css';

import { useState, useEffect } from "react";



// 8 - errar url para mostrar erro
// "http://localhost:3001/products"
const url = "http://192.168.1.4:8686/clientPFF";

function App() {
  const [products, setProducts] = useState([]);

  
  // 1 - resgatando dados
  useEffect( () => {

    async function fetchData(){
    
    const res = await fetch(url, {
      method: 'GET',
      crossDomain: true,
      headers: {
        accept: 'application/json',
      }
    });

    const data = await res.json();

    setProducts(data);

  }
  fetchData();
   }, []);


  console.log(products.NomeCompleto);

  

 return(
  <div className = "App">
    <div>
    <div>{products.map((product) =>(

        <li>
          {product.NomeCompleto} - {product.Email}

        </li>

    ))}</div>
  </div>
  </div>
 )
};

export default App;
