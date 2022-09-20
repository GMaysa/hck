import './App.css';
// import Statefull from './components/statefull';
// import Stateless from './components/stateless';
// import movie from './components/movieData';
import FunctionalMain from './components/functionalComponent/main';
import Counter from './components/Hooks/usestate';
import Example from './components/Hooks/useEffect';

function App() {

  return (
    <>
      {/* <Statefull /> */}
      {/* <Stateless movie={movie} /> */}
      <FunctionalMain />
      <br />
      <br />
      <Counter />
      <br />
      <br />
      <Example />
    </>
  );

}

export default App;
