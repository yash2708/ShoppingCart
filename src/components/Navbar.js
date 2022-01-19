import React from 'react';
const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img
          style={styles.cartIcon}
          src="https://cdn-icons.flaticon.com/png/512/2838/premium/2838895.png?token=exp=1642581584~hmac=1b0b17d87d438efe1d720503f61f1f92"
          alt="cart-icon"
        />
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
};
const styles = {
  cartIcon: {
    height: 32,
    marginRight: 30,
  },
  nav: {
    height: 50,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'sticky',
  },
  cartIconContainer: {
    position: 'relative',
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '40%',
    padding: '4px 8px',
    position: 'absolute',
    right: 0,
    top: -9,
  },
};
export default Navbar;
