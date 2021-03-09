import Head from 'next/head';

// BOOTRSTRAP STYLES
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// IMPORTED COMPONENTS
import { useEffect, useState } from 'react';
import FormGroup from '../components/formGroup';
import Cars from '../components/cars';
import axios from 'axios';
const ratesUrl = 'https://ha.edu.uy/api/rates';

export default function Home() {
  const [inDollars, setInDollars] = useState(true);
  const [rates, setRates] = useState('');

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

                {/*
                 * FILTER AND CURRENCY BUTTONS
                 */}
                <Button className="btn-block mb-3">Filter</Button>
                <Button
                  variant="secondary"
                  className="btn-block"
                  onClick={handleCurrency}
                >
                  {inDollars ? 'Change To Pesos' : 'Change To Dollars'}
                </Button>
              </Form>
            </div>

            {/*
             * CARS INFORMATION
             */}
            <div className="cars-container">
              <Cars inDollars={inDollars} />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
