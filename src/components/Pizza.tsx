import React from "react";
import PizzaCSS from "./Pizza.modules.css";
import {useStateDispatch} from "./AppState";

interface Pizza {
    id: number;
    name: string;
    description: string;
    price: number;
}

interface Props {
    pizza: Pizza
}

const Pizza: React.FC<Props> = ({pizza}) => {
    const dispatch = useStateDispatch()
    const handlerAddToCard = () => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                item: {id: pizza.id, name: pizza.name, price: pizza.price}
            }
        })
    }
    return (
        <li className={PizzaCSS.container}>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
            <button type="button" onClick={handlerAddToCard}>Add to cart</button>
        </li>
    )
}

export default Pizza;
