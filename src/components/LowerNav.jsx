import React from 'react'
import './components.css';
import NextButton from './NextButton';

const LowerNav = ({page,setPage}) => {
console.log('page',page);
  function clickHandler(e) {
    e.preventDefault();
    const itcpage = document.getElementById("itcpage")
    const scrollLeft = itcpage.scrollWidth
    const carousel = document.getElementsByClassName("carousel")[0]
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
        page >= 7 ? setPage(1) : setPage(page+1)
      }
      }>
        <NextButton page={page}/>
    </a>
  )
}

export default LowerNav