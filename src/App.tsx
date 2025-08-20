import CounterButton from './components/CounterButton';
import DateComponent from './components/Date';
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
        <DateComponent date={new Date()} />
      </div>
    </div>
  );
}

export default App;
