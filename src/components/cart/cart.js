import React from 'react';
import {connect} from 'react-redux';
import styles from './cart.module.css';
import CartItem from "./cartItem";

const Cart = ({menu, order}) => {

  const items = menu.filter(item => order[item.id]).map(item => {
    return {...item, amount: order[item.id], sum: item.price * order[item.id]}
  });

  const total =  items.reduce((acc, item) => acc + item.sum, 0);

  return (
    <div className={styles.cart}>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      {renderTotal()}
    </div>
  );

  function renderTotal(){
    if(total){
      return <div><hr/>Total: {total}</div>
    }
    return <div>Cart is empty</div>
  }

}

const mapStateToProps = (state, ownProps) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Cart);