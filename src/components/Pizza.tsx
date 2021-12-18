import React from "react";
import PizzaCSS from "./Pizza.modules.css";
import {useStateDispatch} from "./AppState";
import {PizzaInterface} from "../types";
import {AddToCartProps, withAddToCart} from "./AddToCard";

interface Props extends AddToCartProps{
    pizza: PizzaInterface
}

const Pizza: React.FC<Props> = ({pizza, addToCart}) => {
    const handlerAddToCard = () => {
        addToCart({id: pizza.id, name: pizza.name, price: pizza.price})
    };
    return (
        <li className={PizzaCSS.container}>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
            <button type="button" onClick={handlerAddToCard}>Add to cart</button>
        </li>
    )
}

export default withAddToCart(Pizza);
