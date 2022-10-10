import CounterClass from './features/counter/CounterClassComponent';
import CounterFnComponent from './features/counter/CounterFnComponent';

function App() {
  return (
    <main className='App'>
      <CounterFnComponent /> 
      <CounterClass />
    </main>
  );
}

export default App;