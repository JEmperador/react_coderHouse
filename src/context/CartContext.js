import { useState, createContext } from "react";

const CartContext = createContext();

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([])

    // console.log(cart); LOG PARA CORROBORAR EN CONSOLA
    
    const emptyCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const newCartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(newCartWithoutProduct)
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.quantity
    }

    const totalQuantity = () => {
        return cart.reduce((count, item) => count += item.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((count, item) => count + (item.quantity * item.price), 0)
    }

    const addItem = (product) => {
        if(!isInCart(product.id)) {
            setCart([...cart, product])
        } else {
            const cartUpdated = cart.map(prod => {
                if(prod.id === product.id) {
                    const productUpdated = {
                        ...prod,
                        quantity: product.quantity
                    }
                    return productUpdated
                } else {
                    return prod
                }
            })
            setCart(cartUpdated)
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    return (
        <CartContext.Provider value={{cart, emptyCart, removeItem, getProductQuantity, totalQuantity, totalPrice, addItem, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;