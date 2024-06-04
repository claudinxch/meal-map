import { Container } from './container'
import { ReactTyped } from 'react-typed'
import SearchBar from './searchBar'
import { ArrowDown } from 'lucide-react'

export const Hero = () => {
  const strings = [
    "Find any <strong class='strong-title'>food</strong> you want!",
    "Explore new <strong class='strong-title'>tastes</strong>!",
    "Discover <strong class='strong-title'>delicious recipes</strong>!",
    "Cook with <strong class='strong-title'>passion</strong>!",
    "Enjoy your <strong class='strong-title'>favorite dishes</strong>!",
    "Plan your <strong class='strong-title'>perfect meal!</strong>",
    "Taste the world's <strong class='strong-title'>best cuisines</strong>!",
    "Enjoy various types of <strong class='strong-title'>diets</strong>!",
  ]

  const scrollToSection = () => {
    const pixelsToScroll = 432
    const currentPosition = document.documentElement.scrollTop
    const targetPosition = currentPosition + pixelsToScroll

    window.scrollTo({ top: targetPosition, behavior: 'smooth' })
  }
  return (
    <div className="w-full bg-blue pt-2">
      <Container className="flex flex-wrap">
        <div className="flex justify-center text-center w-full lg:w-1/2">
          <div className="flex flex-col max-w-3xl mb-8 items-center justify-center text-center h-[260px]">
            <h1 className="text-lightGray font-secondary font-bold text-5xl tracking-tight">
              Welcome to MealMap!
            </h1>
            <ReactTyped
              strings={strings}
              typeSpeed={40}
              backSpeed={20}
              loop
              showCursor={false}
              backDelay={1500}
              className="h-[23px] font-primary text-lg self-start leading-5 font-semibold text-darkGray"
            />
            <SearchBar className="mt-4" />
            <p
              onClick={scrollToSection}
              className="cursor-pointer inline-block font-primary text-darkGray relative py-2 mt-3 no-underline link-animated-underline"
            >
              or see some recommendations below{''}
              <button className="animate-bounce border-2 rounded-full border-darkGray ml-1">
                <ArrowDown size={16} />
              </button>{' '}
            </p>
          </div>
        </div>
        <div className="flex items-center xl:pr-32 justify-center w-full lg:w-1/2">
          <img
            src="/img/logo-png.png"
            alt="logo"
            className="hidden w-48 h-48 lg:block"
          />
        </div>
        <div></div>
      </Container>
    </div>
  )
}
