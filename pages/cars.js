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

const Cars = ({ cars }) => {
  const [carsInfo, setCarsInfo] = useState(cars);
  const { data: rates } = useSWR(ratesUrl);
  const [inDollars, setInDollars] = useState(true);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mb-4">
        <Container>
          <div className="title-container">
            <h2>Sales</h2>
            <span>UYU/USD: {!rates ? 'Loading' : `$${rates.uyu}`}</span>
          </div>
          <div className="divider" />

          <div className="grid">
            <div className="filter-container">
              <h4>Filter</h4>
              <div className="divider mb-2"></div>
              <Filter
                setCarsInfo={setCarsInfo}
                inDollars={inDollars}
                setInDollars={setInDollars}
              />
            </div>

            <CarsInfo
              carsInfo={carsInfo}
              setCarsInfo={setCarsInfo}
              inDollars={inDollars}
            />
          </div>
        </Container>
      </main>
    </>
  );
};

export default Cars;

export const getStaticProps = async context => {
  const res = await fetch(carsUrl);

  const cars = await res.json();

  return {
    props: {
      cars,
    },
  };
};
