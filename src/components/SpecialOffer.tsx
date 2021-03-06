import React from 'react';
import SpecialOfferCSS from './SpecialOffer.module.css';
import {PizzaInterface} from "../types";
import { AddToCartProps, withAddToCart, WithAddToCartProps } from './AddToCard';

// interface Props extends AddToCartProps{
//   pizza: PizzaInterface;
// }
interface Props {
  pizza: PizzaInterface;
}

const SpecialOffer: React.FC<Props> = ({ pizza }) => {
  // const handleAddToCartClick = () => {
  //   addToCart({id: pizza.id, name: pizza.name, price: pizza.price})
  // };

  return (
    <div className={SpecialOfferCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <WithAddToCartProps>{({addToCart}) => {
        return (
          <button type="button" onClick={() => addToCart({id: pizza.id, name: pizza.name, price: pizza.price})}>
            Add to Cart
          </button>
        )
      }}</WithAddToCartProps>
    </div>
  );
};

// export default withAddToCart(SpecialOffer); // Using HOC
export default SpecialOffer;
