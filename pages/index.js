import Head from 'next/head';

// useSWR FUNCTIONALITY
import useSWR from 'swr';
import Error from '../components/error';
import Spinner from '../components/spinner';

// BOOTRSTRAP STYLES
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

// IMPORTED COMPONENTS
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
              {error ? (
                <Error />
              ) : !data ? (
                <Spinner />
              ) : (
                data.map((car, index) => {
                  const {
                    image,
                    brand,
                    model,
                    year,
                    price_usd,
                    status,
                    description,
                  } = car;
                  return (
                    <div key={index}>
                      <div className="image mb-2">
                        <Image thumbnail src={image} fluid />
                        {status === 1 ? <div className="badge">new</div> : null}
                      </div>
                      <div className="content mb-4">
                        <div className="title-content">
                          <h4>
                            {brand} {model}
                          </h4>
                          <div>
                            {year} / USD{price_usd}/ XXXXX
                          </div>
                        </div>
                        <p>{description}</p>
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
                })
              )}
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
