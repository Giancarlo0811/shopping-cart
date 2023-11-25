import { Button } from "react-bootstrap"
import { useState } from "react";

function CartButton({
    addProductsToCart, 
    productsInCart, 
    increaseProductQuantity, 
    decreaseProductQuantity,
    removeProduct,
    }) {

    const [isShown, setIsShown] = useState(false);
    const [quantity, setQuantity] = useState(1);

    function toggle() {
        setIsShown(current => !current);
    }

    function increaseQuantity() {
        setQuantity(quantity + 1);
    }

    function decreaseQuantity() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } else {
            setQuantity(1);
        }
    }

    function resetQuantity() {
        setQuantity(1);
    }


    return (
        <div className="mt-auto">
            {!isShown && (
                    <Button className="w-100" onClick={(e) => {
                        addProductsToCart(e);
                        toggle();
                    }}>+ Agregar al Carrito</Button>
            )}
            {isShown && (
                <div className="d-flex flex-column align-items-center" style={{gap:'1rem'}}>
                    <div className="d-flex align-items-center justify-content-center" style={{gap:'.5rem'}}>
                        <Button onClick={(e) => {
                            decreaseProductQuantity(e);
                            decreaseQuantity();
                        }}>-</Button>
                        <span>{quantity} en el Carrito</span>
                        <Button onClick={(e) => {
                            increaseProductQuantity(e);
                            increaseQuantity();
                        }}>+</Button>
                    </div>
                    <div>
                        <Button variant="danger" onClick={(e) => {
                            removeProduct(e);
                            toggle();
                            resetQuantity();
                        }}>Eliminar</Button>
                    </div>
                </div>
            )}
                   
        </div>
    )
}

export default CartButton;