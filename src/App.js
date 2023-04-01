
import './App.css';
// Aula 1 primeiro Componente
import HelloWorld from './components/HelloWorld';
// Aula 3 Terceito componente props
import SayMayName from './components/sayMayName';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {
  return (
    <div className="App">
        <nav className='Nav'>
        <h1>Componente raiz</h1>

        </nav>
        <HelloWorld />

        <SayMayName name={'jonas'}/>
        <Pessoa 
        name='Pedro'
        sexo='Masculino'
        idade='35'
        foto="https://via.placeholder.com/150"
        />
        <List/>
    </div>
  );
}

export default App;
