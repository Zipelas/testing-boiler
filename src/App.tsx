import CounterButton from './components/CounterButton';
import DayComponent from './components/Day';
import MonthComponent from './components/Month';

function App() {
  return (
    <div>
      <h1>Vite + React</h1>

      <CounterButton />
      <div>
        <MonthComponent date={new Date()} />
      </div>
      <div>
        <DayComponent date={new Date()} />
      </div>
    </div>
  );
}

export default App;
