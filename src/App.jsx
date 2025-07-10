import React from "react";
import { Articles } from "./components/Articles";
import { SerchBar } from "./components/SerchBar";

export default function App() {
  return (
    <body className="h-screen bg-white dark:bg-slate-900 dark:text-slate-200 transition-colors duration-300">
      <header
        id="navbar"
        className="h-35 md:h-20 w-full fixed top-0 z-50 flex flex-col items-center justify-center gap-5 md:flex-row bg-white/70 dark:bg-slate-900/70 transition-all duration-300">
        {/* <!-- Logo --> */}
        <div id="logo" className="w-full m-5 px-5">
          <img src="../images/icons/logo-f7862584.svg" alt="Logo" />
        </div>
        <SerchBar />
      </header>
      <main className="w-full mt-40 md:mt-20 mb-10 md:p-5">
        {/* <!-- Titulo --> */}
        <section className="my-10 mx-4 flex items-center justify-between md:my-5 md:mb-8">
          <h1 className="text-2xl font-bold text-gray-700 dark:text-slate-200">Stays in Finland</h1>
          <p id="numberOfCards" className="text-sm font-light text-gray-400">
            12+ stays
          </p>
        </section>
        {/* <!-- Articulos --> */}
        <Articles />
      </main>
      <footer className="w-full h-30 bg-slate-800 dark:bg-slate-800 text-slate-400 flex flex-col items-center justify-center p-5 gap-2">
        <p className="text-xs">© 2025 Windbnb™. All Rights Reserved.</p>
        <div className="w-full flex items-center justify-center gap-2 text-xs">
          <svg
            className="w-6 h-6 text-gray-200"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
              clip-rule="evenodd"
            />
          </svg>
          <a href="https://github.com/TITO9538/Proyecto-final-Funval-N1" className="cursor-pointer">
            Repository of this Proyect
          </a>
        </div>
        <button
          id="theme-toggle"
          className="rounded-full bg-slate-800 dark:bg-slate-800 hover:scale-110 transition-transform duration-300"
          onclick="toggleTheme()"
          aria-label="Toggle Theme">
          <svg
            id="icon-sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-6 h-6 hidden dark:inline-block">
            <path d="M14.438 10.148c.19-.425-.321-.787-.748-.601A5.5 5.5 0 0 1 6.453 2.31c.186-.427-.176-.938-.6-.748a6.501 6.501 0 1 0 8.585 8.586Z" />
          </svg>
          <svg
            id="icon-moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-6 h-6 dark:hidden">
            <path d="M8 1a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 1ZM10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12.95 4.11a.75.75 0 1 0-1.06-1.06l-1.062 1.06a.75.75 0 0 0 1.061 1.062l1.06-1.061ZM15 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 15 8ZM11.89 12.95a.75.75 0 0 0 1.06-1.06l-1.06-1.062a.75.75 0 0 0-1.062 1.061l1.061 1.06ZM8 12a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 12ZM5.172 11.89a.75.75 0 0 0-1.061-1.062L3.05 11.89a.75.75 0 1 0 1.06 1.06l1.06-1.06ZM4 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 4 8ZM4.11 5.172A.75.75 0 0 0 5.173 4.11L4.11 3.05a.75.75 0 1 0-1.06 1.06l1.06 1.06Z" />
          </svg>
        </button>
      </footer>
    </body>
  );
}
