import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Play from './pages/Play';
import SearchResult from './components/layout/SearchResult';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path = "/play" element = {<Play/>}></Route>
          <Route path = "/search" element = {<SearchResult/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
