
import './App.css'
import { LandingPage } from './pages/LandingPage/LandingPage'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'


function App() {
  return (


    <div className='page-container'>
      <Navbar />

      <div className='content-wrap'>
        <LandingPage />
      </div>


      <Footer />
    </div>

  )
}

export default App
