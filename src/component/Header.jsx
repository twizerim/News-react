
import logo from "../assets/logos.jpeg"
import coll from "../assets/coll.png"
import  { Link } from "react-router-dom"

function Headers(){
    return (
        <>
        <nav className="logo">
            <div className="logo-comtainer">
                <img src={logo} alt="news logo" />
            </div>
            <input type="text" placeholder="Seach" className="seach"/>
            <ul className="nav-link">
                <li><a href="#0783801966" className="coll">
                <img src={coll} alt="coll log" />0783801966</a></li>
                <li><Link to="/sign up" className="btn">Sign up</Link></li>
            </ul>
        </nav>
        <div className="nav-category">
        <li><Link to="/" className="links">Ubuzima</Link></li>
        <li><Link to="/" className="links">Ubukungu</Link></li>
        <li><Link to="/" className="links">Uburezi</Link></li>
        <li><Link to="/" className="links">Politike</Link></li>
        <li><Link to="/" className="links">Imikino</Link></li>
        <li><Link to="/" className="links">Imyidagaduro</Link></li>
        <li><Link to="/" className="links">Iyobokamana</Link></li>
        </div>
        </>
    )
}
export default Headers