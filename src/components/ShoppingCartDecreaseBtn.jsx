import { Button } from "react-bootstrap";

function ShoppingCartDecreaseBtn({decreaseProductShoppingCart}) {
    return (
        <Button variant="primary" className="mt-4 text-left" onClick={decreaseProductShoppingCart}>-</Button>
    )
}

export default ShoppingCartDecreaseBtn;