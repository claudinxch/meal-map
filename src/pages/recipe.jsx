import { useParams } from 'react-router-dom'
import { useRecipeInformation } from '../hooks/useRecipeInformation'
import { RecipeInformation } from '../components/recipe-information'

export const Recipe = () => {
  const { id } = useParams()
  const { data: recipeInfo, isLoading, isError } = useRecipeInformation(id)

  const info = {
    title: recipeInfo.title,
    summary: recipeInfo.summary,
    instructions: recipeInfo.analyzedInstructions,
    cuisines: recipeInfo.cuisines,
    diets: recipeInfo.diets,
    dishTypes: recipeInfo.dishTypes,
    ingredients: recipeInfo.extendedIngredients,
    image: recipeInfo.image,
    minutes: recipeInfo.readyInMinutes,
    servings: recipeInfo.servings,
  }

  return <RecipeInformation info={info} />
}
