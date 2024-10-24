import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWord'
//import Frase from './components/Frase'


function App() {

  const name = 'Joaquim';
  
  const url = 'https://via.placeholder.com/150';

 return(
  <div className="App">
    <h1>Alterando o Jsx</h1>
    <p>Ola, {name}</p>

    <img src={url} alt="Imagem aleatoria"/>

    <HelloWord />

  </div>

 )


}

export default App;
