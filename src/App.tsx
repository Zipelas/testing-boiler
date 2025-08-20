import CounterButton from './components/CounterButton';
import Month from './components/Month';

function App() {
  return (
    <div>
      <h1>Vite + React</h1>

      <CounterButton />
      <p>
        <Month date={new Date()} />
      </p>
    </div>
  );
}

export default App;
