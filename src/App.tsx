import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import AboutMe from 'pages/AboutMe/AboutMe'
import Home from 'pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Works from 'pages/Works/Works'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobremim' element={<AboutMe />} />
            <Route path='/trabalhos' element={<Works />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
