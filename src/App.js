
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Shop from './components/Shop/Shop';

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
        shoes.map(shoe => <Shop shoe={shoe}></Shop>)
      }
    </div>
  );
}

export default App;
