import { useState } from "react";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { json } from "react-router-dom";
import Product from "./Product";

function Store() {
    const [isLoading, setIsloading] = useState(true);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/electronics")
        .then(response => response.json())
        .then(data => {
            const productsArray = data.map(data => ({
                id: data.id,
                name: data.title,
                price: data.price,
                image: data.image
            }));

            setProducts(productsArray);
            setIsloading(false);
        });
    }, []);

    console.log(products);

    if (isLoading) {
        return (
            <div>
                <h1 className="text-white">Cargando...</h1>
            </div>
        )
    }

    return (
        <>
            <h1 className="text-white text-center mb-5 mt-5">Productos</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {products.map(product => {
                    return (
                        <Col key={product.id} className="text-white"><Product {...product}/></Col>
                    )
                })}
            </Row>
        </>
    );
}

export default Store;