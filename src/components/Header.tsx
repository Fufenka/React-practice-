import {Route, Routes, NavLink} from "react-router-dom"
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import Skills from "../pages/Skills.tsx";
import Projects from "../pages/Projects.tsx";
import Contact from "../pages/Contact.tsx";
import '../styles/Header.css'

export default function Header() {
    return (
        <>
            <header>
                <ul className='nav'>
                    <li className='nav-item'><NavLink to="/">Home</NavLink></li>
                    <li className='nav-item'><NavLink to="/about">About</NavLink></li>
                    <li className='nav-item'><NavLink to="/skills">Skills</NavLink></li>
                    <li className='nav-item'><NavLink to="/projects">Projects</NavLink></li>
                    <li className='nav-item'><NavLink to="/contacts">Contacts</NavLink></li>
                </ul>

            </header>
            <Routes>
                    <Route  path="/" element={<Home />}/>
                    <Route  path="/about" element={<About />}/>
                    <Route  path="/skills" element={<Skills />}/>
                    <Route  path="/projects" element={<Projects />}/>
                    <Route  path="/contacts" element={<Contact />}/>
            </Routes>
        </>
    )
}