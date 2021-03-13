import Head from 'next/head';

// BOOTRSTRAP STYLES
import { Container } from 'react-bootstrap';

// IMPORTED COMPONENTS
import { useState } from 'react';
import Filter from '../components/filter';
import CarsInfo from '../components/carsInfo';

// useSWR FUNCTIONALITY
import useSWR from 'swr';
const carsUrl = 'https://ha.edu.uy/api/cars';
const ratesUrl = 'https://ha.edu.uy/api/rates';

const Cars = () => {
  const { data: cars, error } = useSWR(carsUrl);
  const { data: rates } = useSWR(ratesUrl);
  const [inDollars, setInDollars] = useState(true);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <div className="title-container">
            <h1>Sales</h1>
            <span>UYU/USD: {!rates ? 'Loading' : `$${rates.uyu}`}</span>
          </div>
          <div className="divider" />

          <div className="grid">
            <div className="filter-container">
              <h3>Filter</h3>
              <div className="divider mb-2"></div>
              <Filter setInDollars={setInDollars} inDollars={inDollars} />
            </div>

            <CarsInfo cars={cars} error={error} inDollars={inDollars} />
          </div>
        </Container>
      </main>
    </>
  );
};

export default Cars;
