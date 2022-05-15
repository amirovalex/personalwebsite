import React from 'react'
import './components.css';
import NextButton from './NextButton';

const LowerNav = ({page,setPage}) => {
console.log('page',page);
  function clickHandler(e) {
    e.preventDefault();
    const itcpage = document.getElementById("itcpage")
    const scrollLeft = itcpage.scrollWidth
    const carousel = document.getElementsByClassName("carouselDiv")[0]
    console.log(page);
    carousel.scrollTo({
      left: page >= 7 ? (scrollLeft * -7) : scrollLeft*page,
      behavior: "smooth"
    });
    }

  return (
    <a id="lowerNav" onClick={(e) => 
      {
        clickHandler(e)
      }
      }>
        <NextButton page={page}/>
    </a>
  )
}

export default LowerNav