import { ModalSearchBar } from "./ModalSearchBar";
import useToggleModal from "../hooks/useToggleModal";
import { useState } from "react";

export function SerchBar({ setLocation, setNumGuests, setBtnPress, location, btnPress, numGuests }) {
  const { modalOn, toggleModal } = useToggleModal();
  const [btn, setBtn] = useState(false);

  const modalOut = (e) => {
    const { id } = e.target;
    if (id === "modal" || id === "btn1" || id === "btn2" || id === "btn") {
      toggleModal();
    }
  };

  return (
    <>
      <div
        className="w-[85%] h-12 rounded-2xl flex m-0 shadow-[0_0_10px_1px_rgba(0,0,0,0.15)] dark:hover:shadow-xl/70 hover:shadow-[0_0_20px_3px_rgba(0,0,0,0.25)] transition-all duration-300 md:m-5 lg:max-w-80"
        onClick={() => {toggleModal(); setBtn(true);}}>
        <div className="w-[40%] h-full flex items-center justify-center border-r border-r-gray-200 dark:border-r-gray-500 rounded-l-xl bg-white dark:bg-slate-800 m-0">
          <p className="px-3 text-xs font-light text-center text-gray-300 dark:text-slate-500 focus:outline-none">
            {location == null ? (
              <span>Add location</span>
            ) : (
              <span className="text-gray-600 dark:text-slate-200">
                {location.city}, {location.country}
              </span>
            )}
          </p>
        </div>
        <div className="w-[40%] h-full flex items-center justify-center border-r border-r-gray-200 dark:border-r-gray-500 bg-white dark:bg-slate-800 m-0">
          <p className="px-3 text-xs font-light text-center text-gray-300 dark:text-slate-500 focus:outline-none">
            {numGuests == null ? (
              <span>Add guests</span>
            ) : (
              <span className="text-gray-600 dark:text-slate-200">
                {numGuests} guest{numGuests > 1 ? "s" : ""}
              </span>
            )}
          </p>
        </div>
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
      {modalOn && btn && (
        <ModalSearchBar
          location={location}
          setBtn={setBtn}
          setBtnPress={setBtnPress}
          btnPress={btnPress}
          setNumGuests={setNumGuests}
          setLocation={setLocation}
          setModal={modalOut}></ModalSearchBar>
      )}
    </>
  );
}
