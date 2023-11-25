import { Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import ShoppingCartRemoveBtn from "./ShoppingCartRemoveBtn";

function ShoppingCart({productsInCart, removeProductShoppingCart}) {
    console.log(productsInCart);

    return  (
       <>
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
                               <ShoppingCartRemoveBtn removeProductShoppingCart={removeProductShoppingCart}/>
                            </Card.Body>
                        </Card>
                )
            })}
        </Row>
       </>
    )
}

export default ShoppingCart;