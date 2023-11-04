import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Footer from './components/Footer'
import HomeWrapper from './components/home/HomeWrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HomeWrapper />
      <Footer />
      
    </>
  )
}

export default App
