import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar'
import Home from './pages/home'

export const RoutesApp = () => {
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
