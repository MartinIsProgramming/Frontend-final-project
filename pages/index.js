import Head from 'next/head';
import NumberFormat from 'react-number-format';

// useSWR FUNCTIONALITY
import useSWR from 'swr';
import Error from '../components/error';
import Spinner from '../components/spinner';

// BOOTRSTRAP STYLES
import { Container } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';

// IMPORTED COMPONENTS
import { useEffect, useState } from 'react';
import FormGroup from '../components/formGroup';
import axios from 'axios';
const carsUrl = 'https://ha.edu.uy/api/cars';
const ratesUrl = 'https://ha.edu.uy/api/rates';

export default function Home() {
  const [inDollars, setInDollars] = useState(true);
  const [rates, setRates] = useState('');
  const { data, error } = useSWR(carsUrl);

  // GETTING MY CURRENCY
  const getCurrency = () => {
    axios.get(ratesUrl).then(res => {
      setRates(res.data);
    });
  };

  // HANDLE THE CURRENCY
  const handleCurrency = () => {
    setInDollars(!inDollars);
  };

  useEffect(() => {
    getCurrency();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <div className="title-container">
            <h1>Welcome to Carshop</h1>
            <span>UYU/USD: ${rates.uyu}</span>
          </div>
          <div className="divider" />

          <div className="grid">
            {/*
             * FILTER FUNCTIONALITY
             */}
            <div className="filter-container">
              <h3>Filter</h3>
              <div className="divider mb-2"></div>
              <Form>
                <FormGroup text="Year" option={1} />
                <FormGroup text="Brand" option="Select..." />
                <FormGroup text="Model" option="Select..." />

                <Button className="btn-block mb-3">Filter</Button>
                <Button
                  variant="light"
                  className="btn-block"
                  onClick={handleCurrency}
                >
                  Change Currency
                </Button>
              </Form>
            </div>

            {/*
             * CARS INFORMATION
             */}
            <div className="cars-container">
              {error ? (
                <Error />
              ) : !data ? (
                <Spinner />
              ) : (
                data.map((car, index) => {
                  return (
                    <div key={index}>
                      <div className="image mb-2">
                        <Image thumbnail src={car.image} fluid />
                        {status === 1 ? <div className="badge">new</div> : null}
                      </div>
                      <div className="content mb-4">
                        <div className="title-content">
                          <h4>
                            {car.brand} {car.model}
                          </h4>
                          <div>
                            {car.year} /{' '}
                            {inDollars ? (
                              <NumberFormat
                                value={car.price_usd}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'USD '}
                              />
                            ) : (
                              <NumberFormat
                                value={car.price_uyu}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                              />
                            )}{' '}
                            / XXXXX
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
                })
              )}
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
