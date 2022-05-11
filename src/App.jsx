import './App.css';
import { useState, useEffect } from 'react';
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

const App = () => {
  const [page, setPage] = useState(1);
  const [pageHeight, setPageHeight] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  const handlePageHeight = (height) => {
    setPageHeight(height)
  }

  const handlePageWidth = (width) => {
    setPageWidth(width)
  }
  const renderPage = () => {

  }

  useEffect(() => {
    console.log(pageWidth, pageHeight)
  },[pageHeight, pageWidth])
  return (
    <div onScroll={() => { console.log('heeeey')}}className="App">
      <TopNav/>
      <div className="carousel">
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
