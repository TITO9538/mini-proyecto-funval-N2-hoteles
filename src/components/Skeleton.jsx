import React from "react";

export default function Skeleton() {
  return (
    <>
      <article className="w-[90%] h-[100%] flex flex-col items-center justify-center animate-pulse">
        <div className="flex items-center justify-center w-full h-60 bg-gray-300 dark:bg-slate-600 rounded-2xl">
          <svg
            className="w-10 h-10 text-gray-200 dark:bg-slate-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="w-[90%] flex justify-between items-center mt-2">
          <div className="h-4 w-[50%] bg-gray-200 dark:bg-slate-500 rounded-xl"></div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-5 text-gray-300 dark:text-slate-600 fill-current">
              <path
                fill-rule="evenodd"
                d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="w-[90%] h-5 bg-gray-300 dark:bg-slate-600 rounded-xl mt-2"></div>
      </article>
    </>
  );
}
