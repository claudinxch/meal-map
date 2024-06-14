import { RecipeCard } from './recipe-card'
import { Container } from './container'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export const RecipeList = ({ title, data, isLoading, isError }) => {
  const getTypeOfDishType = (title, result) => {
    switch (title) {
      case 'Recipes':
        return result.dishTypes[0]
      case 'Cuisines':
        return result.cuisines[0]
      case 'Diets':
        return result.diets[0]
    }
  }

  return (
    <div className="w-full bg-white">
      <Container>
        <div className="flex px-16 mb-2 justify-between lg:px-6">
          <h2 className="font-secondary font-semibold items-center py-1 text-2xl">
            {title}
          </h2>
          <Link
            to=""
            className="flex font-secondary text-sm items-center py-2 no-underline relative transition-transform duration-500 link-animated-underline"
          >
            see more <ChevronRight size={14} />{' '}
          </Link>
        </div>
        <div className="flex gap-2 flex-wrap justify-center lg:flex-nowrap lg:justify-between">
          {/* if screen small(lenght = 4) */}
          {/* {Array.from({ length: 6 }).map((_, index) => (
            <RecipeCard
              key={index}
              title={'macarrao'}
              pictureUrl={
                'https://s2-receitas.glbimg.com/m2u-cGoinyKpSDYF0BvZJxy8zyA=/696x390/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/R/X/Lj3rwSQpm7BgzSEvJ1Mw/macarrao-simples-como-fazer.jpg'
              }
              servings={2}
              minutes={40}
              dishType={'pasta'}
            />
          ))} */}
          {isLoading && <p>carregando</p>}
          {isError && <p>erro!</p>}
          {!isLoading &&
            data?.results.map((result) => (
              <RecipeCard
                key={result.id}
                id={result.id}
                title={result.title}
                pictureUrl={result.image}
                servings={result.servings}
                minutes={result.readyInMinutes}
                dishType={getTypeOfDishType(title, result)}
              />
            ))}
        </div>
      </Container>
    </div>
  )
}
