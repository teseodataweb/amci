import { useState, useEffect } from "react";
import UseSticky from "../../hooks/UseSticky";

const ScrollToTop = () => {
   const { sticky }: { sticky: boolean } = UseSticky();

   const [showScroll, setShowScroll] = useState(false);

   const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
         setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
         setShowScroll(false);
      }
   };

   const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   // useEffect(() => {
   //    window.addEventListener("scroll", checkScrollTop);
   //    return () => window.removeEventListener("scroll", checkScrollTop);
   // }, []);
   useEffect(() => {
      const checkScrollTop = () => {
         if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
         } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
         }
      };

      window.addEventListener("scroll", checkScrollTop);
      return () => window.removeEventListener("scroll", checkScrollTop);
   }, [checkScrollTop]);

   return (
      <>
         <div onClick={scrollTop} className={`backtotop-wrap cursor-pointer ${sticky ? "active-progress" : ""}`}>
            <svg className="backtotop-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
               <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
         </div>
      </>
   )
}

export default ScrollToTop
