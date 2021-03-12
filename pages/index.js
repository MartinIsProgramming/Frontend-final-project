import Head from 'next/head';

// BOOTRSTRAP STYLES
import { Container } from 'react-bootstrap';

const Home = () => {
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
          </div>
          <div className="divider" />
        </Container>
      </main>
    </>
  );
};

export default Home;
