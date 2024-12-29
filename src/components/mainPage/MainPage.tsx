import book_img from "../../images/cooking_book_gpt.png";
import RandomRecipe from "./RandomRecipe";
const MainPage = () => {

  return (
    <div className="flex flex-col ">
      <div>
        <h1 className="text-center text-2xl font-medium mt-5">
          Welcome to our Cooking Website
        </h1>
        <div className="flex flex-row w-full mt-10 ">
          <img
            src={book_img}
            alt="cooking_book"
            className="rounded-full w-96 h-96 ml-10 border-4 border-[#424242]"
          />
          <div className="w-96 h-44 font-medium ml-auto mt-24 mr-20">
            <p>
              Welcome to our cooking website, your ultimate destination for
              delicious recipes, culinary inspiration, and cooking tips! Here,
              you'll find a wide variety of recipes ranging from quick and easy
              meals to gourmet dishes that will impress your guests. Whether
              you're a beginner in the kitchen or a seasoned chef, we have
              something for everyone.
            </p>
          </div>
        </div>
        <RandomRecipe/>
      </div>
    </div>
  );
};

export default MainPage;
