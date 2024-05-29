export const RecipeList = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <h1 className="font-bold black text-gray-500 text-4xl">Hello World!</h1>
      <p className="text-zinc-700 font-medium text-lg">
        This is going to be a recipe finder website! {"<Made by claudin/>"}
      </p>
      <span className="text-orange-500 text-base">
        I will be using React.js, TailwindCSS, and an API from{" "}
        <strong className="text-orange-700">Spoonacular</strong>!
      </span>
    </div>
  );
};
