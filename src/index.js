function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let apiKey = "b8b61a4d34f03tcbf3192f94o59a0ba4";
  let prompt = `User Input: Generate an easy recipe about ${userInput.value}`;
  let context =
    "You are a creative cook, and know many recipes. Your mission is to generate a short recipe in basic HTML. Make sure to follow the user input. Sign the recipe with `SheCodes AI`";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
