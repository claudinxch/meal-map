import { Hero } from '../components/hero'
import { RecipeList } from '../components/recipe-list'
import { useRecipeData } from '../hooks/useRecipeData'
import { useCuisineData } from '../hooks/useCuisineData'
import { useDietData } from '../hooks/useDietData'

export const Home = () => {
  const {
    data: recipes,
    isLoading: recipesIsLoading,
    isError: recipesIsError,
  } = useRecipeData()
  const {
    data: cuisines,
    isLoading: cuisinesIsLoading,
    isError: cuisinesIsError,
  } = useCuisineData()
  const {
    data: diets,
    isLoading: dietsIsLoading,
    isError: dietsIsError,
  } = useDietData()

  return (
    <>
      <Hero />
      <RecipeList
        title="Recipes"
        data={recipes}
        isLoading={recipesIsLoading}
        isError={recipesIsError}
      />
      <RecipeList
        title="Cuisines"
        data={cuisines}
        isLoading={cuisinesIsLoading}
        isError={cuisinesIsError}
      />
      <RecipeList
        title="Diets"
        data={diets}
        isLoading={dietsIsLoading}
        isError={dietsIsError}
      />
    </>
  )
}
