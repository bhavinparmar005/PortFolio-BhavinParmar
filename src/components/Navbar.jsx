import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <h1>Portfolio</h1>
            <Link to="/">About</Link>
            <Link to="/eduction">Education</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/contect">Contact</Link>
        </>
    )
}

export default Navbar
