import Head from 'next/head';

//FOUNDERS DATA
import Data from '../data/founders';

// FONTAWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebook,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';

//BOOTSTRAP
import { Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Button, Container } from 'react-bootstrap';

export default function About() {
  const foundersInfo = Data;

  const iconsInfo = [
    {
      icon: faFacebook,
      path: 'https://www.facebook.com/',
    },
    {
      icon: faLinkedin,
      path: 'https://www.linkedin.com/',
    },
    {
      icon: faTwitterSquare,
      path: 'https://www.twitter.com/',
    },
  ];

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mb-4">
        <Container>
          {/* STORY SECTION */}
          <div className="title-container">
            <h2>Our Story</h2>
          </div>
          <div className="divider" />

          <div className="about-grid">
            <div className="image">
              <Image src="/images/_about/about.jpg" thumbnail fluid />
            </div>
            <div className="text-content">
              <h2>CARSHOP</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequatur, magni quasi maiores obcaecati quisquam architecto
                totam, delectus eos ea nostrum tempora.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos quia animi consequuntur distinctio corrupti
                repudiandae corporis aliquid.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
                necessitatibus vero tempora, minus voluptatibus ad?
              </p>
              <Button variant="light" size="sm">
                <FontAwesomeIcon
                  style={{ width: '15px', marginRight: '5px' }}
                  icon={faEnvelope}
                />
                Contact
              </Button>
            </div>
          </div>

          {/* FOUNDERS SECTION */}
          <div className="title-container">
            <h2>Meet the team</h2>
          </div>
          <div className="divider" />

          <div className="cards-grid">
            {foundersInfo.map((founder, index) => {
              const { image, name, title, description } = founder;
              return (
                <Card key={index}>
                  <Card.Img variant="top" src={image} />
                  <Card.Body className="text-center">
                    <div className="card-title">
                      <h5 className="mb-1">{name}</h5>
                      <span className="text-muted">{title}</span>
                    </div>
                    <p>{description}</p>

                    <div className="social-wrapper">
                      {iconsInfo.map((icon, index) => {
                        return (
                          <a key={index} href={icon.path}>
                            <FontAwesomeIcon
                              className="icon"
                              style={{ width: '1.2rem', color: 'blue' }}
                              icon={icon.icon}
                            />
                          </a>
                        );
                      })}
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </Container>
      </main>
    </>
  );
}
