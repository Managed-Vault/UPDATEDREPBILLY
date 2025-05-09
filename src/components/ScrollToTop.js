import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Forces the window to start at the top whenever the pathname changes.
 * If the URL contains a hash (#section) we let the browser scroll to that
 * element instead.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash, let the browser handle scrolling to that target.
    if (hash) return;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"          // use "smooth" if you prefer
    });
  }, [pathname, hash]);

  return null;                     // this component renders nothing visible
}

export default ScrollToTop;
