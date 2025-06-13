import { useEffect, useState } from "react";

const URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchFood() {
      if (!foodId) {
        return;
      }
      const response = await fetch(
        `${URL}/${foodId}/information?apiKey=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt="" />
        <div>
          <span>
            <strong>⏰ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👪<strong>Serves {food.servings}</strong>
          </span>
          <span>{food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}</span>
          <span>{food.vegan ? "🐮 Vegan" : ""}</span>
        </div>
        <div>
          💲<span>{food.pricePerServing / 100} Per serving</span>
        </div>
      </div>

      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>)
        )}
      </div>
    </div>
  );
}
