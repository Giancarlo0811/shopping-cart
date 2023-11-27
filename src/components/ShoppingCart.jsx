import { Row, Col, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import ShoppingCartRemoveBtn from "./ShoppingCartRemoveBtn";
import ShoppingCartDecreaseBtn from "./ShoppingCartDecreaseBtn";
import ShoppingCartIncreaseBtn from "./ShoppingCartIncreaseBtn";

function ShoppingCart({
    productsInCart, 
    removeProductShoppingCart, 
    total, 
    increaseProductShoppingCart,
    decreaseProductShoppingCart
    }) {

    return  (
       <>
       {productsInCart.length === 0 &&
            <h1 className="text-white text-center">Carrito vacío</h1>
       }
        {productsInCart.length >= 1 &&
            <Row md={1} xs={1} lg={1} className="g-3">
            {productsInCart.map(product => {
                return (
                        <Card 
                            key={product.name} 
                            className="h-100 d-flex flex-row align-items-center justify-content-center">
                            <Card.Img 
                                variant="top" 
                                src={product.image} 
                                height="200px"
                                width="50%"
                                style={{objectFit:'contain'}}
                            />
                            <Card.Body className="d-flex flex-column w-50">
                                <Card.Title className="d-flex flex-column align-items-center justify-content-center mb-4">
                                    <span 
                                        className="text-center">{product.name}
                                    </span>
                                    <span 
                                        className="mt-2" 
                                        style={{fontWeight:'bold'}}>
                                            {`Cantidad: ${product.quantity}`}
                                    </span>
                                    <span 
                                        className="mt-2" 
                                        style={{fontWeight:'bold'}}>
                                        {`Precio: $${Number(product.price.replace('$','')) * product.quantity}`}
                                    </span>
                                </Card.Title>
                               <div className="d-flex flex-column">
                                    <div className="d-flex justify-content-center align-items-center" style={{gap:'1rem'}}>
                                        <ShoppingCartDecreaseBtn decreaseProductShoppingCart={decreaseProductShoppingCart}/>
                                        <ShoppingCartIncreaseBtn increaseProductShoppingCart={increaseProductShoppingCart}/>
                                    </div>
                                    <ShoppingCartRemoveBtn removeProductShoppingCart={removeProductShoppingCart}/>
                               </div>
                            </Card.Body>
                        </Card>
                )
            })}
            <h1 className="text-white">Total: {`$${total}`}</h1>
        </Row>
        }
       </>
    )
}

export default ShoppingCart;