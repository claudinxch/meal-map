import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { Home } from './pages/home'
import { Recipe } from './pages/recipe'

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="*" /** element={ <Error/> } */ />
      </Routes>
    </BrowserRouter>
  )
}
