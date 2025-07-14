import axios from "axios";
import React, { useEffect, useState } from "react";

export function useHoteles() {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function renderArticles() {
      const result = await axios.get("../../stays.json");
      console.log(result);
      setArticles(result);
    }
    renderArticles();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return {
        articles,
        setArticles,
        loading
    }
}
