import React, { useEffect, useState } from 'react'
import CartContext from './CartContext'

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(handleLocalStorage)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    function handleLocalStorage() {

        const savedCart = localStorage.getItem('cart')

        if (savedCart) {
            return JSON.parse(savedCart);
        } else {
            return [];
        }
    }

    function addToCart(product) {

        const existingCart = cart.find(
            (item) => item.id === product.id
        )

        if (existingCart) {
            return
        }

        setCart([
            ...cart,
            {
                ...product,
                quantity: 1
            }
        ])
    }

    function increaseQuantity(cartItem) {

        const updatedCart = cart.map((item) =>
            item.id === cartItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )

        setCart(updatedCart)
    }

    function decreaseQuantity(cartItem) {

        if (cartItem.quantity === 1) {

            const updatedCart = cart.filter(
                (item) => item.id !== cartItem.id
            )

            setCart(updatedCart)

        } else {

            const updatedCart = cart.map((item) =>
                item.id === cartItem.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )

            setCart(updatedCart)
        }
    }

    function removeItem(cartItem) {

        const updatedCart = cart.filter(
            (item) => item.id !== cartItem.id
        )

        setCart(updatedCart)
    }

    function clearCart() {
        setCart([])
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeItem,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider