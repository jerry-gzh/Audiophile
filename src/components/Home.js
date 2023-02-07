import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import a from "../resources/1.png";
import a_s from "../resources/1-s.png";
import b from "../resources/2.png";
import b_s from "../resources/2-s.png";
import c from "../resources/3.png";
import c_s from "../resources/3-s.png";

export function Home() {
  return (
    
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-95"
          srcSet={`${a_s} 500w, ${a} 3600w`}// se debe especificar el ancho de la img con w
          sizes="((max-width: 768px) 700px, max-width: 1200px) 1250w"
          src={require ("../resources/1.png")} // Otra forma de importar
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Studio quality affordable price</h3>
          <Link to= {`/item/:15`} >
            <Button variant="dark">Details</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          srcSet={`${b_s} 500w, ${b} 3600w`}
          sizes="((max-width: 768px) 700px, max-width: 1200px) 1250w"
          src={b}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Unlimited quality</h3>
          <Link to= {`/item/:5`} >
            <Button variant="dark">Details</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          srcSet={`${c_s} 500w, ${c} 3600w`}
          sizes="((max-width: 768px) 700px, max-width: 1200px) 1250w"
          src={c}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>High resolution & stylish</h3>
          <Link to= {`/item/:7`} >
            <Button variant="dark">Details</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
  );
}
