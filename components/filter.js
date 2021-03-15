import { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Form } from 'formik';
import Customlabel from '../components/customLabel';
import CustomSelect from './customSelect';

// BOOTRSTRAP STYLES
import Button from 'react-bootstrap/Button';

const Filter = ({ setCarsInfo, inDollars, setInDollars }) => {
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState('');
  const [models, setModels] = useState([]);
  const [model, setModel] = useState('');

  // GETTING MY BRANDS
  const getBrands = () => {
    const brandsUrl = 'https://ha.edu.uy/api/brands';
    axios.get(brandsUrl).then(res => {
      setBrands(res.data);
    });
  };

  // GETTING MY MODELS
  const getModels = e => {
    const modelsUrl = `https://ha.edu.uy/api/models?brand=${e.target.value}`;
    axios.get(modelsUrl).then(res => {
      setModels(res.data);
      setModel(res.data[1]);
    });
  };

  // HANDLE THE CURRENCY
  const handleCurrency = () => {
    setInDollars(!inDollars);
  };

  // HANDLE THE CURRENCY
  const handleFilter = async () => {
    const filterUrl = `https://ha.edu.uy/api/cars?brand=${brand}&model=${model}`;

    if (brand === '' || model === '') {
      alert('You need to select a brand and a model');
    } else {
      const res = await fetch(filterUrl);
      const filteredCars = await res.json();
      setCarsInfo(filteredCars);
    }
  };

  const getAllCars = async () => {
    const carsUrl = 'https://ha.edu.uy/api/cars';
    const res = await fetch(carsUrl);
    const data = await res.json();
    setCarsInfo(data);
  };

  useEffect(() => {
    getBrands();
  }, []);

  const initialValues = {};

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Form>
        {/* BRAND VALUES */}
        <div className="form-group">
          <Customlabel htmlFor="brand" label="Brands" />
          <CustomSelect
            onChange={e => {
              getModels(e);
              setBrand(e.target.value);
            }}
            name="brand"
            options={brands}
          />
        </div>
        {/* MODEL VALUES */}
        <div className="form-group">
          <Customlabel htmlFor="model" label="Models" />
          <CustomSelect
            onChange={e => setModel(e.target.value)}
            name="model"
            options={models}
          />
        </div>
        {/* FILTER BUTTON */}
        <Button type="submit" onClick={handleFilter} className="btn-block mb-3">
          Filter
        </Button>
        {/* CURRENCY BUTTON */}
        <Button
          variant="secondary"
          className="btn-block"
          onClick={handleCurrency}
        >
          {inDollars ? 'Change To Pesos' : 'Change To Dollars'}
        </Button>

        {/* FILTER BUTTON */}
        <Button type="button" onClick={getAllCars} className="btn-block mb-3">
          All cars
        </Button>
      </Form>
    </Formik>
  );
};

export default Filter;
