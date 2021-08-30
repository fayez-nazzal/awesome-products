import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useGA = () => {
  const history = useHistory();

  useEffect(() => {
    const gtag = window.gtag;

    if (history.action === "PUSH" && typeof gtag === "function") {
      gtag("config", "UA-206070895-1", {
        page_title: document.title,
        page_location: window.location.href,
        page_path: history.location.pathname
      });
    }
  }, []);

  return window.ga;
};

export default useGA;
