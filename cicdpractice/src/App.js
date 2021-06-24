import './App.css';
import Number from './components/Number'

function App() {

  return (
    <div className="App">
      <h1>Hello, World</h1>
      <button id="clickme">Click Me</button>
      <Number numb1={150} numb2={50} />
    </div>
  );
}

export default App;
