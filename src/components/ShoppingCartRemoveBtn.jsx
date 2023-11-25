import { Button } from "react-bootstrap";

function ShoppingCartRemoveBtn({removeProductShoppingCart}) {
    return (
        <Button variant="danger" className="mt-4 text-left" onClick={removeProductShoppingCart}>Eliminar</Button>
    )
}

export default ShoppingCartRemoveBtn;