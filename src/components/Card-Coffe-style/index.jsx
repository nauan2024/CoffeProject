import "./style.css"
import { Button } from "../Button-order-now"
export const Card_Coffe_style = ({ img, h3, tipo, preco, text2 }) => {
    return (
        <div className="card-coffe-style">
            <div className="content-card">
                <img src={img} alt="" />
                <div className="text-card">
                    <h3>{h3}</h3>
                    <p>{tipo}</p>
                    <p className="price">{preco}</p>
                </div>
            </div>
            <Button text={text2} />
        </div>
    )
}