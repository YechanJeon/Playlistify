import { Suspense } from 'react';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Play from './pages/Play';
import Searched from './pages/Searched';
import MainPage from "./pages/MainPage"


function App() {
  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<MainPage/>}>
            <Route path = "/" element = {<Home/>}></Route>
            <Route path = "/search/:keyword" element = {<Searched/>}></Route>
          </Route>
          <Route path = "/play" element = {<Suspense><Play/></Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
      <div></div>
    </>
  );
}

export default App;
