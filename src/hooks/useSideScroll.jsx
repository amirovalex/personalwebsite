import { useRef, useEffect } from "react";

export function useSideScroll (page,setPage, localPage, setLocalPage) {
    console.log('local',localPage)
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    const carousel = document.getElementsByClassName("carouselDiv")[0]
    if (el) {
      const onWheel = (e) => {
          console.log('event',e)
          console.log('element',carousel.scrollLeft)
          console.log('scroll position',carousel.scrollLeft + e.deltaX)
          console.log(!(carousel.scrollLeft === 0 && e.deltaX < 0) &&
          !(carousel.scrollWidth - carousel.clientWidth - Math.round(carousel.scrollLeft) === 0 && 
              e.deltaX > 0))
        if (e.deltaX === 0) return;
        if (
          !(carousel.scrollLeft === 0 && e.deltaX < 0) &&
          !(carousel.scrollWidth - carousel.clientWidth - Math.round(carousel.scrollLeft) === 0 && 
              e.deltaX > 0)
        ) {
          e.preventDefault();
        }
        if(page === 2) {
             return setLocalPage(localPage + 1)
        } 
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);
  return elRef;
}