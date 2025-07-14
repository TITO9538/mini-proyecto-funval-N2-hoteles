import React, { useState } from "react";

export default function useToggleModal() {
  const [modalOn, setModalOn] = useState(false);

  function toggleModal() {
    setModalOn((prev) => {
      return !prev;
    });
  }
  
  return {
    modalOn,
    toggleModal,
  };
}
