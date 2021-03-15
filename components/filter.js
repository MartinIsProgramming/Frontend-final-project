import { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Form } from 'formik';
import Customlabel from '../components/customLabel';
import CustomSelect from './customSelect';

// BOOTRSTRAP STYLES
import Button from 'react-bootstrap/Button';

const Filter = ({ inDollars, setInDollars }) => {
  const [years, setYears] = useState([]);
  const [year, setYear] = useState(null);
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState(null);
  const [models, setModels] = useState([]);
  const [model, setModel] = useState(null);

  // SET YEARS
  const generateYears = () => {
    let newYears = [];
    for (let i = 2021; i >= 2014; i--) {
      newYears.push(i);
    }
    setYears(newYears);
  };

  // GETTING MY BRANDS
  const getBrands = () => {
    const brandsUrl = 'https://ha.edu.uy/api/brands';
    axios.get(brandsUrl).then(res => {
      setBrands(res.data);
    });
  };

  // GETTING MY MODELS
  const getModels = e => {
    //const brand = e.target.value;
    const modelsUrl = `https://ha.edu.uy/api/models?brand=${e.target.value}`;
    axios.get(modelsUrl).then(res => setModels(res.data));
  };

  // HANDLE THE CURRENCY
  const handleCurrency = () => {
    setInDollars(!inDollars);
  };

  // HANDLE THE CURRENCY
  const handleFilter = async () => {
    const filterUrl = `https://ha.edu.uy/api/cars?year=${year}&brand=${brand}&model=${model}`;
    const res = await fetch(filterUrl);
    const filteredCars = await res.json();

    cars = filteredCars;
  };

  useEffect(() => {
    generateYears();
    getBrands();
  }, []);

  const initialValues = {
    // year: years,
    // brand: brands,
    // model: models,
  };

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Form>
        {/* YEARS VALUES */}
        <div className="form-group">
          <Customlabel htmlFor="year" label="Year" />
          <CustomSelect
            onChange={e => setYear(e.target.value)}
            name="year"
            options={years}
          />
        </div>

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
      </Form>
    </Formik>
  );
};

export default Filter;
