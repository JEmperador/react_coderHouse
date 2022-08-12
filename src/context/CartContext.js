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

    const getQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
        accu += prod.quantity
        })

        return accu
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.quantity
    }

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const cartUpdated = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod,
                        quantity: productToAdd.quantity
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
        <CartContext.Provider value={{cart, emptyCart, removeItem, getQuantity, getProductQuantity, addItem, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;