import axios from "axios";
import React, { useEffect, useState } from "react";

export function LocationModal({inputValue, setLocation}) {
    const [locationArticles, setLocationArticles] = useState([]);
    

    useEffect(() => {
  async function renderLocations() {
    try {
      const result = await axios.get("../../stays.json");
      const allLocationsFiltered = result.data.filter(loc =>
        loc.city.toLowerCase().includes(inputValue.toLowerCase()) ||
        loc.country.toLowerCase().includes(inputValue.toLowerCase())
      );
      setLocationArticles(allLocationsFiltered);
    } catch (error) {
      console.error("Error al cargar datos:", error);
    }
  }
  if (inputValue.trim() !== "") {
    renderLocations();
  } else {
    setLocationArticles([]);
  }
}, [inputValue]);



  return (
    <>
      <div className="flex w-60 h-60 fixed flex-col mt-20 ml-[-5px] gap-3 bg-white dark:bg-slate-800 md:mt-7">
        {locationArticles &&
          locationArticles.map((article) => (
            <div onClick={() => {setLocation(article); console.log(article)}} className="flex gap-1 text-xs text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 text-gray-600 fill-current">
                <path
                  fill-rule="evenodd"
                  d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>{article.city}, {article.country}</p>
            </div>
          ))}
      </div>
    </>
  );
}
