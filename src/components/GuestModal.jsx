import React, { useState } from "react";

export function GuestModal({ setGuests, setNumGuests }) {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const total = adults + children;
  setGuests(total);
  setNumGuests(total);

  return (
    <div id="mod" className="flex fixed flex-col mt-10 gap-10">
      {/* <!-- Adults --> */}
      <div className="flex flex-col">
        <div className="text-[12px] font-bold">Adults</div>
        <div className="text-[12px] text-gray-400 mb-2">Ages 13 or above</div>
        <div className="flex items-center gap-5 text-[10px] font-bold">
          <button
            onClick={() => {
              adults > 0 ? setAdults(adults - 1) : setAdults(adults);
            }}
            className="size-5 border rounded-sm border-gray-400 bg-gray-200 dark:bg-slate-700 dark:text-slate-300">
            -
          </button>
          <div className="text-sm">{adults}</div>
          <button
            onClick={() => {
              total <= 9 ? setAdults(adults + 1) : setAdults(adults);
            }}
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
            onClick={() => {
              children > 0 ? setChildren(children - 1) : setChildren(children);
            }}
            className="size-5 border rounded-sm border-gray-400 bg-gray-200 dark:bg-slate-700 dark:text-slate-300">
            -
          </button>
          <div className="text-sm">{children}</div>
          <button
            onClick={() => {
              total <= 9 ? setChildren(children + 1) : setChildren(children);
            }}
            className="size-5 border rounded-sm border-gray-400 bg-gray-200 dark:bg-slate-700 dark:text-slate-300">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
