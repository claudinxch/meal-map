// https://api.spoonacular.com/recipes/complexSearch?sort=random&number=10&addRecipeInformation=true&apiKey=
// title, readyinminutes, servings, image, dishtype[0]

export const RecipeCard = ({
  title,
  pictureUrl,
  servings,
  minutes,
  dishType,
}) => {
  return (
    <div className="bg-lightGray min-w-56 max-w-56 h-[300px] rounded-xl flex flex-col relative transition-transform ease-in-out duration-50 overflow-hidden animated-card hover:cursor-pointer hover:scale-[1.02]">
      <div className="w-[208px] h-[208px] py-2 mx-auto relative z-10">
        <img
          src={pictureUrl}
          alt=""
          className="w-full h-full object-cover rounded-lg shadow-md"
        />{' '}
        <div className="absolute top-4 left-2 bg-yellow px-[10px] py-1 rounded-full flex items-center text-darkGray">
          <span className="font-primary font-semibold text-xs capitalize">
            {dishType === '' ? 'yummy' : dishType}
          </span>
        </div>
        {/* api.image */}
      </div>
      <div className="mt-1 flex flex-col gap-5 px-2 pb-2 z-10">
        <h2 className="font-primary text-base leading-5 text-wrap font-semibold">
          {title}
        </h2>
        <div className="flex gap-1 items-center justify-around font-fourth">
          <span className="bg-yellow px-2 py-[2px] text-base rounded-full">
            {servings} servings
          </span>
          <span className="bg-yellow px-2 py-[2px] text-base rounded-full">
            {minutes} minutes
          </span>
        </div>
      </div>
    </div>
  )
}
