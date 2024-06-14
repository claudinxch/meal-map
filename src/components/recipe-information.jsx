import { Container } from './container'

/*  
    INFO:
    title: recipeInfo.title,
    summary: recipeInfo.summary,
    instructions: recipeInfo.analyzedInstructions,
    cuisines: recipeInfo.cuisines,
    diets: recipeInfo.diets,
    dishTypes: recipeInfo.dishTypes,
    ingredients: recipeInfo.extendedIngredients,
    image: recipeInfo.image,
    minutes: recipeInfo.readyInMinutes,
    servings: recipeInfo.servings, */

export const RecipeInformation = ({ info }) => {
  return (
    <div className="w-full bg-white">
      <Container>
        <div className="grid grid-cols-2 py-8 px-1 justify-around mx-auto">
          <div className="px-3 flex flex-col">
            <h2 className="text-center font-primary text-lg font-medium text-darkGray">
              {info.recipeTitle}
            </h2>
            <div>
              {info.instructions} {/** forEach i guess */}
            </div>
          </div>
          <div>
            <img src={info.image} alt={info.title} />
          </div>
        </div>
      </Container>
    </div>
  )
}
