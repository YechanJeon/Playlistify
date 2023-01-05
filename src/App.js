import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Play from './pages/Play';
import Searched from './pages/Searched';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path = "/play" element = {<Play/>}></Route>
          <Route path = "/search/:keyword" element = {<Searched/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
