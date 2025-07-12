import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "./Skeleton";

export function Articles() {
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

  return (
    <>
      {loading ? (
        <section
          className="w-full grid grid-cols-1 place-content-center place-items-center gap-4 md:grid-cols-2 md:gap-3 xl:grid-cols-3">
          {articles &&
            articles.data.map(() => (
              <section className="w-full " key={Math.random()}>
                <Skeleton />
              </section>
            ))}{" "}
        </section>
      ) : (
        <section
          className="w-full grid grid-cols-1 place-content-center place-items-center gap-4 md:grid-cols-2 md:gap-3 xl:grid-cols-3">
          {articles &&
            articles.data.map((article) => (
              <article key={Math.random()} className="w-[90%] flex flex-col items-center justify-center overflow-hidden transform transition-transform duration-400 hover:scale-102">
                <div className="rounded-2xl overflow-hidden w-full h-50 md:h-60">
                  <img
                    src={article.photo}
                    alt={article.title}
                    className="object-cover w-full h-full transform transition-transform duration-800 hover:scale-125 active:scale-170"
                  />
                </div>
                <div className="w-[90%] flex justify-between items-center mt-2">
                  <div className="flex items-center gap-1 text-xs text-gray-500 xl:text-sm">
                    {article.superHost ? (
                      <div className="h-6 w-22 border rounded-xl flex items-center justify-center text-gray-600 dark:text-slate-900 dark:bg-slate-600 dark:font-bold xl:w-25">
                        SUPERHOST
                      </div>
                    ) : (
                      ""
                    )}
                    <div>{article.type}</div>
                    <span>.</span>
                    <div>
                      {article.beds == null
                        ? `unspecified`
                        : `${article.beds > 1 ? `${article.beds} beds` : `${article.beds} bed`}`}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="size-4 text-[#eb5757] fill-current hover:animate-spin">
                      <path
                        fill-rule="evenodd"
                        d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="font-light dark:text-slate-200">{article.rating}</span>
                  </div>
                </div>
                <h3 className="w-[90%] text-sm my-2 font-medium lg:text-lg">{article.title}</h3>
              </article>
            ))}{" "}
        </section>
      )}
    </>
  );
}
