import { Routes, Route} from 'react-router-dom';
import './App.css';
import WordsColors from './components/WordsColors';

const Home = (props) => {
  return (
  <div>
      <h1>Welcome</h1>
  </div>
  )}

function App() {

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/:word" element={<WordsColors/>}/>
          <Route path="/:word/:color1/:bgColor2" element={<WordsColors/>}/>
        </Routes>
      </div>
  );
}

export default App;
