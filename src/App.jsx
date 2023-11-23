import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './components/Home'
import Store from './components/Store'
import About from './components/About'
import ShoppingCart from './components/ShoppingCart'
import NavBar from './components/NavBar'

function App() {

  const [productsInCart, setProductsInCart] = useState([]);
  const [count, setCount] = useState(0);

  function addProductsToCart(e) {
      const productName = e.target.parentNode.previousSibling.children[0].textContent;
      const productPrice = e.target.parentNode.previousSibling.children[1].textContent;
      const productImage = e.target.parentNode.previousSibling.parentNode.previousSibling.src;
      let productQuantity = 1;

      const object = {name: productName, price: productPrice, image: productImage, quantity: productQuantity};

      const name = productsInCart.find(product => product.name === productName);

      if (!name) {
        setProductsInCart([...productsInCart, object]);
      } else {
        const newArray = productsInCart.map(product => {
            return {...product, quantity: product.quantity + 1}
        })
        setProductsInCart(newArray);
      }
  }

  console.log(productsInCart);

  return (
    <>
    <NavBar />
    <Container className='mb-4'>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='tienda' element={<Store addProductsToCart={addProductsToCart} count={count}/>}/>
        <Route path='sobre-nosotros' element={<About/>}/>
        <Route path='carrito' element={<ShoppingCart productsInCart={productsInCart}/>}/>
      </Routes>
    </Container>
    </>
  )
}

export default App
