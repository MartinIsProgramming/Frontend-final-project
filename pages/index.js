import Head from 'next/head';
import useSWR from 'swr';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import FormGroup from '../components/formGroup';

const carsUrl = 'https://ha.edu.uy/api/cars';

export default function Home() {
  const { data, error } = useSWR(carsUrl);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <h1>Welcome to Carshop</h1>
          <div className="divider" />

          <div className="grid">
            <div className="filter-container">
              <h3>Filter</h3>
              <div className="divider mb-2"></div>
              <Form>
                <FormGroup text="Year" option={1} />
                <FormGroup text="Brand" option="Select..." />
                <FormGroup text="Model" option="Select..." />

                <Button className="btn-block mb-3">Filter</Button>
                <Button variant="light" className="btn-block">
                  Change Currency
                </Button>
              </Form>
            </div>

            <div className="cars-container">
              {data?.map((car, index) => {
                return (
                  <div key={index}>
                    <div className="image mb-2">
                      <Image thumbnail src={car.image} fluid />
                      {car.status === 1 ? (
                        <div className="badge">nuevo</div>
                      ) : null}
                    </div>
                    <div className="content mb-4">
                      <div className="title-content">
                        <h4>
                          {car.brand} {car.model}
                        </h4>
                        <div>
                          {car.year} / USD{car.price_usd}/ XXXXX
                        </div>
                      </div>
                      <p>{car.description}</p>
                      <ButtonGroup size="sm" aria-label="Basic example">
                        <Button className="mr-2" variant="success">
                          Buy car
                        </Button>
                        <Button className="mr-2" variant="info">
                          More Information
                        </Button>
                        <Button variant="light">Share</Button>
                      </ButtonGroup>
                    </div>
                    <div className="divider" />
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </main>

      <footer></footer>
    </>
  );
}
