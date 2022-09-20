import './App.css';
import Inline from './components/Inline';
import ObjectVar from './components/ObjectVariable';
import Eks from './components/External';
import EksMod from './components/ExternalCssModule';
import EksObjectVar from './components/ExternalObject';
import syCo from './components/hello';

function App() {
  return (
    <>
      <Inline />
      <ObjectVar />
      <Eks />
      <EksMod />
      <EksObjectVar />
      <syCo />
    </>
  );
}

export default App;
