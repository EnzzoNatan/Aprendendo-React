import logo from './logo.svg';
import './App.css';

function App() {

  const name = 'Joaquim';
  
  const url = 'https://via.placeholder.com/150';

 return(
  <div className="App">
    <h1>Alterando o Jsx</h1>
    <p>Ola, {name}</p>

    <img src={url} alt="Imagem aleatoria"/>

  </div>

 )


}

export default App;
