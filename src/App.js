
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Product from './components/Product/Product';



function App() {
  const [shoes, SetShoes] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => SetShoes(data))
  }, []);
  return (
    <div className="App">
      <Header></Header>
      {
        shoes.map(shoe => <Product key={shoe.id} shoe={shoe}></Product>)
      }
    </div>
  );
}

export default App;
