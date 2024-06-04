import { Hero } from '../components/hero'
import { RecipeList } from '../components/recipe-list'

const Home = () => {
  return (
    <>
      <Hero />
      <RecipeList title="Recipes" />
      <RecipeList title="Cuisines" />
      <RecipeList title="Diets" />
    </>
  )
}
export default Home
