import "./style.css"
import { Card_Coffe_style } from "../Card-Coffe-style"
import cappuchino from "../../assets/img/cappuchino.svg"
import Chai_Latte from "../../assets/img/Chai_Latte.svg"
import Macchiato from "../../assets/img/Macchiato.svg"
import Expresso from "../../assets/img/Expresso.svg"
import { Button } from "../Button-order-now"
export const Coffe_style = () => {
    return(
        <section className="section_coffe_style">
            <div className="content-top-coffestyle">
                <h2>Enjoy a new blend of coffee style</h2>
                <p>Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
            </div>
            <div className="container-cards-coffe-style">
                <Card_Coffe_style
                img={cappuchino}
                h3={"Cappuccino"}
                tipo={"Coffee 50% | Milk 50%"}
                preco={"$8.50"}
                text2={"Order Now"}
                />
                <Card_Coffe_style
                img={Chai_Latte}
                h3={"Chai Latte"}
                tipo={"Coffee 50% | Milk 50%"}
                preco={"$8.50"}
                text2={"Order Now"}
                />
                <Card_Coffe_style
                img={Macchiato}
                h3={"Macchiato"}
                tipo={"Coffee 50% | Milk 50%"}
                preco={"$8.50"}
                text2={"Order Now"}
                />
                <Card_Coffe_style
                img={Expresso}
                h3={"Expresso"}
                tipo={"Coffee 50% | Milk 50%"}
                preco={"$8.50"}
                text2={"Order Now"}
                />
            </div>
        </section>
    )
}