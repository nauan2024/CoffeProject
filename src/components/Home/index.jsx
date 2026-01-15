import "./style.css"
import { Main } from "../Main"
import { Header } from "../Header"
import backgroundimg from "../../assets/img/mainbackground.svg"
export const Home = () => {
    return(
        <>
        <section className="Home">
        <Header/>
        <Main/>
        </section>
        </>
    )
}