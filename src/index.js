function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings:
      "This eggplant caponata recipe is a delicious summer appetizer or side dish!",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
