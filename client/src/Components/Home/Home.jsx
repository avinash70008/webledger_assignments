import {Carousel} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


export const Home = () => {

    return(
        <div className="carousel">
            <Carousel variant="dark">

  <Carousel.Item className="Citem">
    <img
      style={{
        height:"400px",objectFit:"contain"
      }}
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/top-view-rice-with-carrot-cooked-with-lamb-served-with-yogurt-salad_141793-2449.jpg?size=626&ext=jpg&ga=GA1.2.1647570982.1690008618&semt=ais"
      alt="First slide"
    />
    <Carousel.Caption className="Ccaption">
     
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img style={{
      height:"400px",
      objectFit:"contain"
    }}
      className="d-block w-100"
      src="https://img.freepik.com/free-vector/hand-drawn-asian-food-sale-banner-template_23-2150057614.jpg?size=626&ext=jpg&ga=GA1.2.1647570982.1690008618&semt=ais"
      alt="Second slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  
  
  <Carousel.Item>
    <img style={{
      height:"400px",
      objectFit:"contain"
    }}
      className="d-block w-100"
      src="https://img.freepik.com/free-vector/gradient-indian-restaurant-facebook-template_23-2149429440.jpg?size=626&ext=jpg&ga=GA1.2.1647570982.1690008618&semt=ais"
      alt="Third slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img style={{
      height:"400px",
      objectFit:"contain"
    }}
      className="d-block w-100"
      src="https://img.freepik.com/premium-photo/isolated-delicious-spicy-chicken-biryani-black-plate-white-background_593195-816.jpg?size=626&ext=jpg&ga=GA1.2.1647570982.1690008618&semt=ais"
      alt="Fourth slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



 
        
        
        
        
        </div>
    )
}