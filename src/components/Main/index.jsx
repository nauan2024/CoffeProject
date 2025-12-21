import "./style.css"
import { Button } from "../Button-order-now"
export const Main = () => {
    return (

        <section className="main">
            <div className="content-main">
                <div className="content-text-main">
                    <span>We’ve got your morning covered with</span>
                    <h1>Coffee</h1>
                    <p>It is best to start your day with a cup of coffee. Discover the
                        best flavours coffee you will ever have. We provide the best
                        for our customers.</p>
                </div>
                
            </div>

            <Button text={"Order Now"}/>
        </section>
    )
}