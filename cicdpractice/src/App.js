import './App.css';
import Number from './components/Number'

function App() {

  return (
    <div className="App">
      <h1>Hello, World</h1>
      <button id="clickme">Click Me</button>
      <Number numb1={22} numb2={8} />
    </div>
  );
}

export default App;
