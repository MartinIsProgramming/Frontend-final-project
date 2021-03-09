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
const brandsUrl = 'https://ha.edu.uy/api/brands';

export default function Home() {
  const [inDollars, setInDollars] = useState(true);
  const [rates, setRates] = useState('');
  const [years, setYears] = useState([]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);

  // SET YEARS
  const generateYears = () => {
    let newYears = [];
    for (let i = 2020; i >= 2014; i--) {
      newYears.push(i);
    }
    setYears(newYears);
  };

  // GETTING MY CURRENCY
  const getCurrency = () => {
    axios.get(ratesUrl).then(res => {
      setRates(res.data);
    });
  };

  // GETTING MY BRANDS
  const getBrands = () => {
    const modelsUrl = `https://ha.edu.uy/api/brands`;
    axios.get(modelsUrl).then(res => {
      setBrands(res.data);
    });
  };

  // GETTING MY MODELS
  const getModels = e => {
    const brand = e.target.value;
    const modelsUrl = `https://ha.edu.uy/api/models?brand=${brand}`;
    axios.get(modelsUrl).then(res => setModels(res.data));
  };

  // HANDLE THE CURRENCY
  const handleCurrency = () => {
    setInDollars(!inDollars);
  };

  useEffect(() => {
    getCurrency();
    generateYears();
    getBrands();
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
                <FormGroup text="Year" options={years} />
                <Form.Group>
                  <Form.Label>Brands</Form.Label>

                  <Form.Control onChange={getModels} as="select">
                    {brands.map((brand, index) => {
                      return <option key={index}>{brand}</option>;
                    })}
                  </Form.Control>
                </Form.Group>

                <FormGroup text="Model" options={models} />

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
