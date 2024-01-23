
import './App.css'
import { LandingPage } from './pages/LandingPage/LandingPage'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuienesSomos } from './pages/LandingPage/QuienesSomos/QuienesSomos';
import { QueHacemos } from './pages/QueHacemos/QueHacemos';


function App() {
  return (

    <BrowserRouter>


      <div className='page-container'>

        <Navbar />

        <div className='content-wrap'>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/quienes' element={<QuienesSomos />} />
            <Route path='/hacemos' element={<QueHacemos />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
