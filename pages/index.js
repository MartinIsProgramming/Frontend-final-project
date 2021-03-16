import Head from 'next/head';

// FONTAWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCar,
  faStickyNote,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

// BOOTRSTRAP STYLES
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

const Home = () => {
  // CREATING THE SLIDE CONTENT
  const slidesContent = [
    {
      image: '/images/cars_home/audi_1.jpg',
      label: 'Audi',
    },
    {
      image: '/images/cars_home/audi_2.jpg',
      label: 'Audi',
    },
    {
      image: '/images/cars_home/bentley_1.jpg',
      label: 'Bentley',
    },
    {
      image: '/images/cars_home/bmw_1.jpg',
      label: 'BMW',
    },
    {
      image: '/images/cars_home/volvo_1.jpg',
      label: 'Volvo',
    },
  ];

  //CARDS CONTENT
  const cardsContent = [
    {
      title: 'New Cars',
      icon: faCar,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eius qui saepe numquam ratione accusamus minus exercitationem laborum!',
    },
    {
      title: 'Used Cars',
      icon: faBullhorn,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eius qui saepe numquam ratione accusamus minus exercitationem laborum!',
    },
    {
      title: 'Paper Work',
      icon: faStickyNote,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eius qui saepe numquam ratione accusamus minus exercitationem laborum!',
    },
  ];
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mb-4">
        {/* HERO SLIDES */}
        <Carousel className="slider" fade>
          {slidesContent.map((slide, index) => {
            return (
              <Carousel.Item className="slide" key={index}>
                <img
                  className="d-block w-100"
                  src={slide.image}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{slide.label}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>

        <Container>
          <div className="title-container">
            <h1>Welcome to Carshop</h1>
          </div>
          <div className="divider" />

          <div className="cards-grid">
            {cardsContent.map((card, index) => {
              return (
                <Card key={index}>
                  <Card.Header className="d-flex">
                    <FontAwesomeIcon
                      className="mr-1"
                      style={{ width: '20px' }}
                      icon={card.icon}
                    />{' '}
                    {card.title}
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>{card.description}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </Container>
      </main>
    </>
  );
};

export default Home;
