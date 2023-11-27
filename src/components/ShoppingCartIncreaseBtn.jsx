import { Button } from "react-bootstrap";

function ShoppingCartIncreaseBtn({increaseProductShoppingCart}) {
    return (
        <Button variant="primary" className="mt-4 text-left" onClick={increaseProductShoppingCart}>+</Button>
    )
}

export default ShoppingCartIncreaseBtn;