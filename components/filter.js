import React, { useState, useEffect } from 'react';
import axios from 'axios';

// BOOTRSTRAP STYLES
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from '../components/formGroup';

const brandsUrl = 'https://ha.edu.uy/api/brands';

const Filter = ({ inDollars, setInDollars }) => {
  //const [inDollars, setInDollars] = useState(true);
  const [years, setYears] = useState([]);
  const [year, setYear] = useState(null);
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState(null);
  const [models, setModels] = useState([]);
  const [model, setModel] = useState(null);

  // SET YEARS
  const generateYears = () => {
    let newYears = [];
    for (let i = 2020; i >= 2014; i--) {
      newYears.push(i);
    }
    setYears(newYears);
  };

  // GETTING MY BRANDS
  const getBrands = () => {
    axios.get(brandsUrl).then(res => {
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

  const handleFilter = () => {
    // const filterUrl = `https://ha.edu.uy/api/cars?year=${year}&brand=${brand}&model=${model}`;
  };

  useEffect(() => {
    generateYears();
    getBrands();
  }, []);

  return (
    <Form>
      <FormGroup text="Year" options={years} />

      <Form.Group>
        <Form.Label>Brands</Form.Label>
        <Form.Control onChange={getModels} as="select">
          <option>Select..</option>
          {brands.map((brand, index) => {
            return <option key={index}>{brand}</option>;
          })}
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Models</Form.Label>
        <Form.Control as="select">
          {models.map((model, index) => {
            return <option key={index}>{model}</option>;
          })}
        </Form.Control>
      </Form.Group>

      {/*
       * FILTER AND CURRENCY BUTTONS
       */}
      <Button onClick={handleFilter} className="btn-block mb-3">
        Filter
      </Button>
      <Button
        variant="secondary"
        className="btn-block"
        onClick={handleCurrency}
      >
        {inDollars ? 'Change To Pesos' : 'Change To Dollars'}
      </Button>
    </Form>
  );
};

export default Filter;
