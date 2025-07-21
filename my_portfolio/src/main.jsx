import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './NavBar.jsx'
import FirstArticle from './FirstArticle.jsx'
import Aboutme from './Aboutme.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Education from './Education.jsx'
import Contactme from './Contactme.jsx'
import Footer from './Footer.jsx'
import './index.css' //
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <FirstArticle/>
    <Aboutme/>
    <Skills/>
    <Contactme/>
    <Footer/>
    

  </StrictMode>,
)
