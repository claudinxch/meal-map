import React from "react";
import Container from "./container";
import { ReactTyped } from "react-typed";
import SearchBar from "./searchBar";

const Hero = () => {
  const strings = [
    "Find any <strong class='strong-title'>food</strong> you want!",
    "Explore new <strong class='strong-title'>tastes</strong>!",
    "Discover <strong class='strong-title'>delicious recipes</strong>!",
    "Cook with <strong class='strong-title'>passion</strong>!",
    "Enjoy your <strong class='strong-title'>favorite dishes</strong>!",
    "Plan your <strong class='strong-title'>perfect meal!</strong>",
    "Taste the world's <strong class='strong-title'>best cuisines</strong>!",
    "Enjoy various types of <strong class='strong-title'>diets</strong>!",
  ];

  const scrollToSection = () => {
    let pixelsToScroll;

    if (window.innerWidth < 640) {
      pixelsToScroll = 900;
    } else {
      pixelsToScroll = 700;
    }
    const currentPosition = document.documentElement.scrollTop;
    const targetPosition = currentPosition + pixelsToScroll;

    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };
  return (
    <div className="w-full bg-green pt-2">
      <Container className="flex flex-wrap">
        <div className="flex justify-center text-center w-full lg:w-1/2">
          <div className="flex flex-col max-w-3xl mb-8 items-center justify-center text-center">
            <h1 className="text-lightGray font-secondary font-bold text-4xl tracking-tight">
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
            <SearchBar className="mt-3" />
            <p>or see recommendations</p>
          </div>
        </div>
        <div className="flex items-center xl:pr-32 justify-center w-full lg:w-1/2">
          <img
            src="/img/logo-png.png"
            alt="logo"
            className="hidden w-44 h-44 lg:block"
          />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
