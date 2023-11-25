import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import CartButton from "./CartButton";

function Product({
    name, 
    price, 
    image, 
    addProductsToCart, 
    productsInCart, 
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProduct,
    }) {

    return (
        <Card className="h-100">
            <Card.Img 
                variant="top" 
                src={image} 
                height="200px" 
                style={{objectFit:'contain'}}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex flex-column align-items-center justify-content-center mb-4">
                    <span className="text-center">{name}</span>
                    <span className="mt-2" style={{fontWeight:'bold'}}>${price}</span>
                </Card.Title>
                <CartButton 
                    addProductsToCart={addProductsToCart} 
                    productsInCart={productsInCart}
                    increaseProductQuantity={increaseProductQuantity}
                    decreaseProductQuantity={decreaseProductQuantity}
                    removeProduct={removeProduct}
                />
            </Card.Body>
        </Card>
    )
}

export default Product;