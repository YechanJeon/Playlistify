import { Suspense} from 'react';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Play from './pages/Play';
import Searched from './pages/Searched';
import MainPage from "./pages/MainPage"
import VideoPlayer from './components/common/VideoPlayer';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<MainPage/>}>
            <Route path = "/" element = {<Home/>}></Route>
            <Route path = "/search/:keyword" element = {<Searched/>}></Route>
          </Route>
          <Route path = "/play" element = {<Suspense fallback = {<div>asdf</div>}><Play/></Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    <Suspense>
      <VideoPlayer/>
    </Suspense>

    </>
  );
}

export default App;
