import './App.css';
import PersonCard from './componentes/PersonCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonCard firstName = "Doe" lastName="Jane" age={45} hairColor="Black"/>
        <PersonCard firstName = "John" lastName="Smith" age={88} hairColor="Brown"/>
        <PersonCard firstName = "Millard" lastName="Fillmore" age={50} hairColor="Brown"/>
        <PersonCard firstName = "Maria" lastName="Smith" age={62} hairColor="Brown"/>
      </header>
    </div>
  );
}

export default App;
