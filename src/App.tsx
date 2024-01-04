import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import Home from 'pages/Home/Home'
import './App.scss'

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App
