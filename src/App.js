import { Suspense , lazy} from 'react';
import {BrowserRouter , Routes, Route , Navigate} from 'react-router-dom'
import Home from "./pages/Home"
import Searched from './pages/Searched';
import MainPage from "./pages/MainPage"
import VideoPlayer from './components/common/VideoPlayer';



function App() {
  const Play = lazy(() => import('./pages/Play'))
  return (
    <div className='w-screen h-screen overflow-hidden'>
      {/* overflow-hidden */}
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<MainPage/>}>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path = "/*" element = {<Navigate to = "/"/>}/>
          <Route path = "/search/:keyword" element = {<Searched/>}></Route>
          </Route>
          <Route path = "/play" element = {<Suspense fallback = {<div className='w-screen h-screen bg-bgGray'></div>}><Play/></Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    <Suspense>
      <VideoPlayer/>
    </Suspense>

    </div>
  );
}

export default App;
