import './App.css';
import Number from './components/Number'

function App() {

  return (
    <div className="App">
      <h1>Hello, World</h1>
      <button id="clickme">Click Me</button>
      <Number numb1={2} numb2={20} />
    </div>
  );
}

export default App;
