import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const { cart } = useContext(CartContext)

  const cartCount = cart.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        Ecommerce-Store
      </Link>

      <Link to="/cart" className="cart-link">
        Cart ({cartCount})
      </Link>

    </nav>
  )
}

export default Navbar