import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ hidden }) => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart }) => ({
  hidden: cart.hidden,
});

export default connect(mapStateToProps, null)(CartDropdown);
