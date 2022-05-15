import './App.css';
import { useState, useEffect,useRef } from 'react';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import CVPage from './pages/CVPage';
import ITCPage from './pages/ITCPage';
import JamaPage from './pages/JamaPage';
import PortfolioPage from './pages/PortfolioPage';
import SkillsPage from './pages/SkillsPage';
import LowerNav from './components/LowerNav';
import TopNav from './components/TopNav';
import BlankPage from './pages/BlankPage';
import PageColor from './components/PageColor';
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
// import HorizontalScroll from '@oberon-amsterdam/horizontal';
// import { useSideScroll } from "./hooks/useSideScroll";

const App = () => {
  const [page, setPage] = useState(1);
  const [pageHeight, setPageHeight] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  
  const handlePageHeight = (height) => {
    setPageHeight(height)
  }
  const [initialScrollX, setInitialScrollX] = useState(0);
  const [scrollDistanceX, setScrollDistanceX] = useState(0);
  const [initialScrollY, setInitialScrollY] = useState(0);
  const [scrollDistanceY, setScrollDistanceY] = useState(0);

  // const mouseDownCoords = e => {
  //   window.checkForDrag = e.clientX;
  // };
  // const clickOrDrag = e => {
  //   const mouseUp = e.clientX;
  //   if (
  //     mouseUp < window.checkForDrag + 5 &&
  //     mouseUp > window.checkForDrag - 5
  //   ) {
  //     setBackground(randomcolor());
  //   }
  // };

  const resetScroll = () => {
    console.log('reset')
    setInitialScrollX(0)
    setScrollDistanceX(0)
    setInitialScrollY(0)
    setScrollDistanceY(0)
  }

  function clickHandler(type) {
  const itcpage = document.getElementById("itcpage")
  const scrollLeft = itcpage.scrollWidth
  const carousel = document.getElementsByClassName("carousel")[0]
  type === "next" 
  ? 
    (() => {
        carousel.scrollTo({
        left: page >= 7 ? (scrollLeft * -7) : scrollLeft*page,
        behavior: "smooth"})
        setPage(page+1)
      })() 
    :
    (() => {
      carousel.scrollTo({
      left: page >= 7 ? (scrollLeft * -7) : -scrollLeft*page,
      behavior: "smooth"})
      setPage(page-1)
    })()
    
  }

  const scrollPage = (x,y) => {
    console.log(x,y)
    initialScrollX === 0 && (setInitialScrollX(x))
    initialScrollY === 0 && (setInitialScrollY(y))
    setScrollDistanceX(x)
    setScrollDistanceY(y)
    console.log('scroll x', scrollDistanceX-initialScrollX)
    console.log('scroll y', scrollDistanceY-initialScrollY)
    scrollDistanceX-initialScrollX > 100 && (() => {
      clickHandler("next")
      resetScroll()
    })()
    scrollDistanceY-initialScrollY > 100 && (() => {
      clickHandler("next")
      resetScroll()
    })()
    initialScrollX - scrollDistanceX < -100 && (() => {
      clickHandler("back")
      resetScroll()
    })()
    initialScrollY - scrollDistanceY < -100 && (() => {
      clickHandler("back")
      resetScroll()
    })()
    
  }
  

  const handlePageWidth = (width) => {
    setPageWidth(width)
  }
  const renderPage = () => {

  }

  useEffect(() => {
    console.log(page)
  },[page])

  useEffect(() => {
    console.log(initialScrollX,initialScrollY)
    console.log(scrollDistanceX,scrollDistanceY)
  },[scrollDistanceX,scrollDistanceY])

  useEffect(() => {
    document.addEventListener('mousedown', () => console.log('handlePageWidth'))
        const carousel = document.getElementsByClassName("carouselDiv")[0]
    const handleScroll= (e) => {
       carousel.scrollBy(e.deltaY, 0);
       console.log('scroll!',e.deltaY)
    }
    carousel.addEventListener('scroll', handleScroll);

  },[])
  useEffect(() => {
    console.log(pageWidth, pageHeight)
  },[pageHeight, pageWidth])

  const changePageOnScroll = () => {
    const carousel = document.getElementsByClassName("carouselDiv")[0]
    const itcpage = document.getElementById("itcpage")
    const scrollLeft = itcpage.scrollWidth
    page <= 7 && carousel.scrollLeft % itcpage.scrollWidth === 0 &&
    console.log(carousel.scrollLeft / itcpage.scrollWidth)
    setPage(carousel.scrollLeft / itcpage.scrollWidth + 1)
  } 

    // const scrollRef = useSideScroll(page,setPage);

  return (
    <div className="App">
      <TopNav/>
        <div onScroll={(e) => {
          changePageOnScroll()
        }} className="carouselDiv">
        <AboutPage handlePageHeight={handlePageHeight} handlePageWidth={handlePageWidth}/>
        <CoursesPage/>
        <ITCPage/>
        <JamaPage/>
        <PortfolioPage/>
        <SkillsPage/>
        <CVPage/>
        </div>
      <LowerNav page={page} setPage={setPage}/>
    </div>
  );
}

export default App;
