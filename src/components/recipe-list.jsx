// https://api.spoonacular.com/recipes/complexSearch?sort=random&number=10&addRecipeInformation=true&apiKey=
// can use query = pasta
import { RecipeCard } from './recipe-card'
import { Container } from './container'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export const RecipeList = (props) => {
  return (
    <div className="w-full bg-white">
      <Container>
        <div className="flex px-16 mb-2 justify-between lg:px-6">
          <h2 className="font-secondary font-semibold items-center py-1 text-2xl">
            {props.title}
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
          {Array.from({ length: 6 }).map((_, index) => (
            <RecipeCard key={index} />
          ))}
        </div>
      </Container>
    </div>
  )
}
