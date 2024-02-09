import React from "react";
import { render } from "@testing-library/react";
import RecipeListItem from "../RecipeListItem";

let recipe =   {
    recipe : {
        label: "onion bhaji",
        img: "test_img",
        url: "test_url",
        ingrediants: []
    }
 

}  //LABel, img , url, ingrediants

let user = null;
describe("smoke test", () => {
    it("renders without crashing", function() {
        render(<RecipeListItem recipeData={recipe} user={user} />);
      });

})
