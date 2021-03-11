import Head from 'next/head';
const ratesUrl = 'https://ha.edu.uy/api/rates';

// BOOTRSTRAP STYLES
import { Container } from 'react-bootstrap';

// IMPORTED COMPONENTS
import { useState } from 'react';
import Filter from '../components/filter';
import Cars from '../components/cars';
import useSWR from 'swr';

const Home = () => {
  const { data } = useSWR(ratesUrl);
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
            <h1>Welcome to Carshop</h1>
            <span>UYU/USD: {!data ? 'Loading..' : `$${data.uyu}`}</span>
          </div>
          <div className="divider" />

          <div className="grid">
            <div className="filter-container">
              <h3>Filter</h3>
              <div className="divider mb-2"></div>
              <Filter setInDollars={setInDollars} inDollars={inDollars} />
            </div>

            <Cars inDollars={inDollars} />
          </div>
        </Container>
      </main>
    </>
  );
};

export default Home;
