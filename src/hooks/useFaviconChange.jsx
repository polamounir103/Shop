import { useEffect } from "react";

const useWindowChange = () => {
  useEffect(() => {
    const handleBlur = () => {
      document.querySelector("link[rel='icon']").setAttribute("href", "/favicon-dark.ico");
      document.title = "Come Back!";
    };

    const handleFocus = () => {
      document.querySelector("link[rel='icon']").setAttribute("href", "/favicon-light.ico");
      document.title = "EComm";
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);
};

export default useWindowChange;
