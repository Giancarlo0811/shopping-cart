import { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './components/Home'
import Store from './components/Store'
import About from './components/About'
import ShoppingCart from './components/ShoppingCart'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  const [productsInCart, setProductsInCart] = useState(() => {
    return JSON.parse(localStorage.getItem('ProductsInCart')) || []
  });

  useEffect(() => {
    localStorage.setItem('ProductsInCart', JSON.stringify(productsInCart));
  },[productsInCart]);

  function addProductsToCart(e) {
    const productName = e.target.parentNode.previousSibling.children[0].textContent;
    const productPrice = e.target.parentNode.previousSibling.children[1].textContent;
    const productImage = e.target.parentNode.previousSibling.parentNode.previousSibling.src;
    let productQuantity = 1;

    const object = {name: productName, price: productPrice, image: productImage, quantity: productQuantity};

    const name = productsInCart.find(product => product.name === productName);

    if (!name) {
      setProductsInCart([...productsInCart, object]);
    }
  }

  function increaseProductQuantity(e) {
    const productName = e.target.parentNode.parentNode.parentNode.parentNode.children[0].children[0].textContent;

    const newArray = productsInCart.map(product => {
      if (product.name === productName) {
        return {...product, quantity: product.quantity + 1}
      } else {
        return product;
      }
    })

    setProductsInCart(newArray);
  }

  function increaseProductShoppingCart(e) {
    const productName = e.target.parentNode.parentNode.previousSibling.children[0].textContent;

    const newArray = productsInCart.map(product => {
      if (product.name === productName) {
        return {...product, quantity: product.quantity + 1}
      } else {
        return product;
      }
    })

    setProductsInCart(newArray);

  }

  function decreaseProductQuantity(e) {
    const productName = e.target.parentNode.parentNode.parentNode.parentNode.children[0].children[0].textContent;

    const newArray = productsInCart.map(product => {
      if (product.name === productName) {
        if (product.quantity > 1) {
          return {...product, quantity: product.quantity - 1}
        } else {
          return {...product, quantity: 1}
        }
      } else {
        return product;
      }
    })
    
    setProductsInCart(newArray);
  }

  function decreaseProductShoppingCart(e) {
    const productName = e.target.parentNode.parentNode.previousSibling.children[0].textContent;

    const newArray = productsInCart.map(product => {
      if (product.name === productName) {
        if (product.quantity > 1) {
          return {...product, quantity: product.quantity - 1}
        } else {
          return {...product, quantity: 1}
        }
      } else {
        return product;
      }
    })
    
    setProductsInCart(newArray);
  }

  function removeProduct(e) {
    const productName = e.target.parentNode.parentNode.parentNode.parentNode.children[0].children[0].textContent;

    const newArray =  productsInCart.map(product => {
      if (product.name === productName) {
        return {...product, quantity: 0}
      } else {
        return product;
      }
    }).filter(product => product.quantity >= 1);

    setProductsInCart(newArray);
  }

  function removeProductShoppingCart(e) {
    const productName = e.target.parentNode.previousSibling.children[0].textContent
    
    const newArray =  productsInCart.map(product => {
      if (product.name === productName) {
        return {...product, quantity: 0}
      } else {
        return product;
      }
    }).filter(product => product.quantity >= 1);

    setProductsInCart(newArray);
  }

  console.log(productsInCart);
  console.log(localStorage)

  return (
    <>
    <NavBar productsInCart={productsInCart}/>
    <Container className='mb-5'>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='tienda' element={<Store
                                        addProductsToCart={addProductsToCart}
                                        productsInCart={productsInCart}
                                        increaseProductQuantity={increaseProductQuantity}
                                        decreaseProductQuantity={decreaseProductQuantity}
                                        removeProduct={removeProduct}
                                      />}/>
        <Route path='sobre-nosotros' element={<About/>}/>
        <Route path='carrito' element={<ShoppingCart
                                        productsInCart={productsInCart}
                                        removeProductShoppingCart={removeProductShoppingCart}
                                        increaseProductShoppingCart={increaseProductShoppingCart}
                                        decreaseProductShoppingCart={decreaseProductShoppingCart}
                                      />}/>
      </Routes>
    </Container>
    <Footer />
    </>
  )
}

export default App
