import React from "react";
import PizzaCSS from "./Pizza.modules.css";
import {useSetState} from "./AppState";

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
    const setState = useSetState()
    const handlerAddToCard = () => {
        setState((prevState) => {
            const itemExists = prevState.cart.items.find((item) => item.id === pizza.id);
            return {
                ...prevState,
                cart: {
                    ...prevState.cart,
                    items: itemExists ? prevState.cart.items.map(item => {
                        if (item.id === pizza.id) {
                            return {...item, quantity: item.quantity + 1};
                        }
                        return item;
                    }) : [
                        ...prevState.cart.items, {id: pizza.id, name: pizza.name, price: pizza.price, quantity: 1}
                    ]
                }
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
