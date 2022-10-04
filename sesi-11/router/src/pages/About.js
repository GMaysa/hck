import { Outlet, Link } from "react-router-dom"

export default function About () {
    return(
        <>
            <h1>About Us</h1>
            <p>This is About Us</p>
            <Link to="about-company">About the Company</Link>
            <Link to="about-me">About Me</Link>
            <Outlet/>
        </>
    )
}