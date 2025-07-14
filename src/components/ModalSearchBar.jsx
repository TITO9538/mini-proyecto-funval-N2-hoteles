import React, { useEffect, useState } from "react";
import { LocationModal } from "./LocationModal";
import useToggleModal from "../hooks/useToggleModal";
import { GuestModal } from "./GuestModal";

export function ModalSearchBar({ setModal, setLocation, location, setNumGuests, setBtnPress, btnPress, setBtn }) {
  const [inputValue, setInputValue] = useState("");
  const [guests, setGuests] = useState(0);
  const { modalOn, toggleModal } = useToggleModal();
  let inputReady = false;

  const modalOut = (e) => {
    const clickedInsideMod = e.target.closest("#mod");
    if (!clickedInsideMod && modalOn) {
      toggleModal();
    }
  };

  useEffect(() => {
  if (location) {
    setInputValue(`${location.city}, ${location.country}`);
  }
}, [location]);

//   const momodal = (e) => {
//     const clickedInsideMod = e.target.closest("#mod");
//     if (clickedInsideMod && modalOn) {
//       console.log("si");
//     } else {
//       console.log("no");
//     }
//   };

  return (
    <>
      <div id="modal" onClick={setModal} className="fixed inset-0 bg-black/50 z-50">
        <div
          onClick={modalOut}
          className="w-full h-[80%] flex flex-col justify-between items-center bg-white dark:bg-slate-800 md:h-[60%] z-60">
          {/* <!-- edit your search (only mobile) --> */}
          <div className="w-full p-4 pt-5 flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 md:hidden">
            <p>Edit your search</p>
            <button id="btn" className="text-xl">x</button>
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
                  value={inputValue}
                  placeholder="Add location"
                  className="text-sm text-gray-800 focus:outline-none dark:text-slate-300"
                  onChange={(e) => setInputValue(e.target.value)}
                />
                {/* Location MODAL */}
                {inputValue !== "" && !modalOn && !inputReady && (
                  <LocationModal
                  inputValue={inputValue}
                  setLocation={setLocation}
                  ></LocationModal>
                )}
              </div>
              {/* <!-- Enter Guests --> */}
              <div className="w-[34%] p-2 px-3 border-gray-200 md:border-r dark:border-gray-500">
                <p className="text-[9px] text-gray-500 font-bold">GUESTS</p>
                <p onClick={toggleModal} className="text-sm text-gray-400">
                  {guests > 0 ? `${guests} guests` : "Add guests"}
                </p>
                {/* Guests MODAL*/}
                {modalOn && (
                  <div>
                    <GuestModal setNumGuests={setNumGuests} setGuests={setGuests}></GuestModal>
                  </div>
                )}
              </div>
              {/* <!-- Serch btn only md+ --> */}
              <div className="hidden w-[32%] h-[70%] m-5 items-center justify-center md:flex">
                <button id="btn1" onClick={() => {
                    setBtnPress(!btnPress);
                    setBtn(false);
                    setModal;
                }} className="w-[40%] h-full flex items-center justify-center rounded-xl bg-[#eb5757] hover:bg-[#bd5e5e] focus:bg-[#fb8c8c] gap-2">
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
          <button id="btn2" onClick={() => {
                    setBtnPress(!btnPress);
                    setBtn(false);
                    setModal;
                }} className="w-[30%] h-[6%] m-5 flex items-center justify-center rounded-xl bg-[#eb5757] hover:bg-[#bd5e5e] focus:bg-[#fb8c8c] gap-2 md:hidden">
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
    </>
  );
}
