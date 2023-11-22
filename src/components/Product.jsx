import { Button, Card } from "react-bootstrap";

function Product({id, name, price, image}) {
    const quantity = 0;

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
                    <span className="mt-2" style={{fontWeight:'bold'}}>{`Precio: $${price}`}</span>
                </Card.Title>
                <div className="mt-auto">
                   {quantity === 0 ? (
                    <Button className="w-100">+ Agregar al carrito</Button>
                   ) 
                   : <div className="d-flex flex-column align-items-center" style={{gap:'1rem'}}>
                        <div className="d-flex align-items-center justify-content-center" style={{gap:'.5rem'}}>
                            <Button>-</Button>
                            <span>{quantity} in cart</span>
                            <Button>+</Button>
                        </div>
                        <div>
                            <Button variant="danger">Eliminar</Button>
                        </div>
                    </div>
                   }
                </div>
            </Card.Body>
        </Card>
    )
}

export default Product;