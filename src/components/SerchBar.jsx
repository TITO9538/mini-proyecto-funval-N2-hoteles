import React, { useState } from "react";

export function SerchBar() {
  const [modal, setModal] = useState(false);

  return (
    <>
      {/* <!-- Barra de busqueda onDisplay --> */}
      <div
        id="barraDeBusqueda"
        className="w-[85%] h-12 rounded-2xl flex m-0 shadow-[0_0_10px_1px_rgba(0,0,0,0.15)] dark:hover:shadow-xl/70 hover:shadow-[0_0_20px_3px_rgba(0,0,0,0.25)] transition-all duration-300 md:m-5 lg:max-w-80"
        onClick={(e) => {
          if (!modal) setModal(true);
          e.stopPropagation();
        }}>
        {/* <!-- Location --> */}
        <div className="w-[40%] h-full flex items-center justify-center border-r border-r-gray-200 dark:border-r-gray-500 rounded-l-xl bg-white dark:bg-slate-800 m-0">
          <p
            id="locationOnMainDisplay"
            className="px-3 text-xs font-light text-center text-gray-300 dark:text-slate-500 focus:outline-none">
            Add location
          </p>
        </div>
        {/* <!-- Guests --> */}
        <div className="w-[40%] h-full flex items-center justify-center border-r border-r-gray-200 dark:border-r-gray-500 bg-white dark:bg-slate-800 m-0">
          <p
            id="guestsOnMainDisplay"
            className="px-3 text-xs font-light text-center text-gray-300 focus:outline-none">
            Add guests
          </p>
        </div>
        {/* <!-- Serch Button --> */}
        <div className="w-[20%] h-full flex items-center justify-center rounded-r-xl m-0 bg-white dark:bg-slate-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-4 text-[#eb5757] fill-current">
            <path
              fillrule="evenodd"
              d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      {/* <!-- Modal de busqueda --> */}
      {modal && (
        <div id="modalBusqueda" className="fixed inset-0 bg-black/50 z-50">
          <div
            id="modal"
            className="w-full h-[80%] flex flex-col justify-between items-center bg-white dark:bg-slate-800 md:h-[60%]">
            {/* <!-- edit your search (only mobile) --> */}
            <div className="w-full p-4 pt-5 flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 md:hidden">
              <p>Edit your search</p>
              <button className="text-xl">X</button>
            </div>
            {/* <!-- Location & Guests box --> */}
            <div className="w-[85%] h-[70%] flex flex-col md:pt-15">
              {/* <!-- Location & Guests --> */}
              <div className="w-full flex flex-col rounded-xl shadow-[0_0_10px_1px_rgba(0,0,0,0.15)] md:flex-row md:items-center md:justify-between dark:border dark:border-slate-500">
                {/* <!-- Enter Location --> */}
                <div className="md:w-[34%] p-2 px-3 max-md:border-b border-gray-200 md:border-r dark:border-gray-500">
                  <p className="text-[8px] text-gray-500 font-bold">LOCATION</p>
                  <input
                    type="text"
                    autoComplete="off"
                    onClick={(e) => e.stopPropagation()}
                    placeholder="Add location"
                    className="text-sm text-gray-800 focus:outline-none dark:text-slate-300"
                  />
                  {/* <!-- Location reference --> */}
                  <div
                    id="suggestions"
                    className="hidden w-60 h-60 fixed flex-col mt-20 ml-[-5px] gap-3 bg-white dark:bg-slate-800 md:mt-7">
                    {/* <!-- list example --> */}
                    <div className="flex gap-1 text-xs text-gray-500">
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
                      <p>Vaasa, Finland</p>
                    </div>
                  </div>
                </div>
                {/* <!-- Enter Guests --> */}
                <div
                  id="guests"
                  className="w-[34%] p-2 px-3 border-gray-200 md:border-r dark:border-gray-500">
                  <p className="text-[9px] text-gray-500 font-bold">GUESTS</p>
                  <p id="guestsOnDisplay" className="text-sm text-gray-400">
                    Add guests
                  </p>
                  {/* <!-- Guests form --> */}
                  <div id="guestsForm" className="hidden fixed flex-col mt-10 gap-10">
                    {/* <!-- Adults --> */}
                    <div className="flex flex-col">
                      <div className="text-[12px] font-bold">Adults</div>
                      <div className="text-[12px] text-gray-400 mb-2">Ages 13 or above</div>
                      <div className="flex items-center gap-5 text-[10px] font-bold">
                        <button
                          id="btnLessGuestAdults"
                          className="size-5 border rounded-sm border-gray-400 bg-gray-200 dark:bg-slate-700 dark:text-slate-300">
                          -
                        </button>
                        <div id="adults" className="text-sm">
                          0
                        </div>
                        <button
                          id="btnPlusGuestAdults"
                          className="size-5 border rounded-sm border-gray-400 bg-gray-200 dark:bg-slate-700 dark:text-slate-300">
                          +
                        </button>
                      </div>
                    </div>
                    {/* <!-- Children --> */}
                    <div className="flex flex-col">
                      <div className="text-[12px] font-bold">Children</div>
                      <div className="text-[12px] text-gray-400 mb-2">Ages 12 or below</div>
                      <div className="flex items-center gap-5 text-[10px] font-bold">
                        <button
                          id="btnLessGuestChildren"
                          className="size-5 border rounded-sm border-gray-400 bg-gray-200 dark:bg-slate-700 dark:text-slate-300">
                          -
                        </button>
                        <div id="children" className="text-sm">
                          0
                        </div>
                        <button
                          id="btnPlusGuestChildren"
                          className="size-5 border rounded-sm border-gray-400 bg-gray-200 dark:bg-slate-700 dark:text-slate-300">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Serch btn only md+ --> */}
                <div className="hidden w-[32%] h-[70%] m-5 items-center justify-center md:flex">
                  <button
                    id="btnSearch2"
                    className="w-[40%] h-full flex items-center justify-center rounded-xl bg-[#eb5757] hover:bg-[#bd5e5e] focus:bg-[#fb8c8c] gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-3 text-white fill-current">
                      <path
                        fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <p className="text-xs text-white font-light">search</p>
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Search btn movile only --> */}
            <button
              id="btnSearch1"
              className="w-[30%] h-[6%] m-5 flex items-center justify-center rounded-xl bg-[#eb5757] hover:bg-[#bd5e5e] focus:bg-[#fb8c8c] gap-2 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-3 text-white fill-current">
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className="text-xs text-white font-light">search</p>
            </button>
          </div>
          <div className="h-full w-full" onClick={() => setModal(false)}></div>
        </div>
      )}
    </>
  );
}
