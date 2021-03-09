import Head from 'next/head';
import axios from 'axios';
const ratesUrl = 'https://ha.edu.uy/api/rates';

// BOOTRSTRAP STYLES
import { Container } from 'react-bootstrap';

// IMPORTED COMPONENTS
import { useEffect, useState } from 'react';
import Filter from '../components/filter';
import Cars from '../components/cars';

export default function Home() {
  const [inDollars, setInDollars] = useState(true);
  const [rates, setRates] = useState('');

  // GETTING MY CURRENCY
  const getCurrency = () => {
    axios.get(ratesUrl).then(res => {
      setRates(res.data);
    });
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
            <div className="filter-container">
              <h3>Filter</h3>
              <div className="divider mb-2"></div>
              <Filter setInDollars={setInDollars} inDollars={inDollars} />
            </div>

            <div className="cars-container">
              <Cars inDollars={inDollars} />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
