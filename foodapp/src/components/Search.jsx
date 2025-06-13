import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("");
  // Syntax of the useEffect hook
  useEffect(() => {
    async function fetchFood() {
      if (!query) {
        return;
      }

      if (query.length < 5) {
        return;
      }

      const res = await fetch(
        `${URL}/complexSearch?query=${query}&apiKey=${API_KEY}`
      );
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
