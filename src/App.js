
import './App.css';
// Aula 1 primeiro Componente
import HelloWorld from './components/HelloWorld';
// Aula 3 Terceito componente props
import SayMayName from './components/sayMayName';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
        <h1>Meu primeiro projeto em React</h1>
        <HelloWorld />

        <SayMayName name={'jonas'}/>
        <Pessoa 
        name='Pedro'
        sexo='Masculino'
        idade='35'
        foto="https://via.placeholder.com/150"
        />
        
    </div>
  );
}

export default App;
