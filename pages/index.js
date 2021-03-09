import Head from 'next/head';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormGroup } from '../components/formGroup';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1>Welcome to Carshop</h1>
        <div className="divider" />

        <div className="grid">
          <div className="filter">
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
          <div className="cars"></div>
        </div>
      </main>

      <footer></footer>
    </>
  );
}
