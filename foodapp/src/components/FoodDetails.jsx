import { useEffect, useState } from "react";

const URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
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
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      Food Details {foodId}
      {food.title}
      <img src={food.image} alt="" />
    </div>
  );
}
