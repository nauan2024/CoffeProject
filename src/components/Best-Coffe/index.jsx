import "./style.css"
import imggrao from "../../assets/img/imgbestcoffe.svg"
import blastcoffe from "../../assets/img/coffee_blast.svg"
import { Button } from "../Button-order-now"
export const Best_Coffe = () => {
    return (
        <>
            <section className="section-best-coffe">

                <div className="group1-bestcoffe">
                    <h2>Discover the best coffee</h2>
                    <p>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
                    <Button text={"Learn More"} />
                </div>
                <img src={imggrao} alt="" />
                    <img id="blast" src={blastcoffe} alt="" />
            </section>

        </>
    )
}