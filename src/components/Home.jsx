import { Button, Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'

const slides = [
    {
        image: img1,
        name: 'Disco Duros'
    },
    {
        image: img2,
        name: 'Audífonos'
    },
    {
        image: img3,
        name: 'Monitores'
    }
]

function Home() {
    return (
        <>
         <div className='text-center mb-3'>
            <h1 className='text-white'>Los Mejores Productos Electrónicos</h1>
            <NavLink to='tienda'><Button>Tienda</Button></NavLink>
        </div>
        <Carousel 
            autoPlay={true}
            interval={4000}
            style={{
                backgroundColor:'#121212',
                borderRadius:'5px',
                boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'
            }}
        >
            {slides.map(slide => (
                <Carousel.Item key={slide.name} 
                style={{
                    backgroundImage:`url(${slide.image})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'contain',
                    backgroundPosition:'center',
                    height:'80vh',
                    }}>
                    <Carousel.Caption>
                        <h3>{slide.name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
        </>
    );
}

export default Home;