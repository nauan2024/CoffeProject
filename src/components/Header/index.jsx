import "./style.css"
import Logotipo from "../../assets/img/logotipo.svg"
export const Header = () => {
    return(
        
        <section className="header">
            <img src={Logotipo} alt="" />
            <nav className="nav-header">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </nav>
            <nav className="buttons-header">
                <a className="signin" href="">Sign In</a>
                <a className="signup" href="">Sign Up</a>
            </nav>
        </section>
    )
}