import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar'
import Home from './pages/home'

function App() {
  console.log(import.meta.env.VITE_API_KEY)
  console.log(import.meta.env.VITE_API_URL)
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" /** element={ <Error/> } */ />
      </Routes>
    </BrowserRouter>
  )
}

export default App
