import { useState } from "react";

const useModalCgu = () => {
  const [isShowing2, setIsShowing2] = useState(false);

  function toggle2() {
    setIsShowing2(!isShowing2);
  }

  return {
    isShowing2,
    toggle2
  };
};

export default useModalCgu;
