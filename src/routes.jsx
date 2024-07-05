import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { Home } from './pages/home'
import { Recipe } from './pages/recipe'
import { Diets } from './pages/diets'
import { Cuisines } from './pages/cuisines'

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diets" element={<Diets />} />
        <Route path="/cuisines" element={<Cuisines />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="*" /** element={ <Error/> } */ />
      </Routes>
    </BrowserRouter>
  )
}
